import re

def extract_yt_term(command):
    patterns = [
        r'play\s+(.*?)\s+on\s+youtube',
        r'youtube\s+(.*)',
        r'play\s+(.*)\s+youtube',
        r'search\s+(.*?)\s+on\s+youtube'
    ]
    for pattern in patterns:
        match = re.search(pattern, command, re.IGNORECASE)
        if match:
            return match.group(1).strip()
    
    return None

def remove_words(input_string, words_to_remove):
    # Split the input string into words
    words = input_string.split()

    # Remove unwanted words
    filtered_words = [word for word in words if word.lower() not in words_to_remove]

    # Join the remaining words back into a string
    result_string = ' '.join(filtered_words)

    return result_string