import React from 'react';
const LABEL_24119 = 'component_24119';
export function Component24119({ value = 24119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24119, 'data-value': derived.doubled }, children);
}
export default Component24119;
