import React from 'react';
const LABEL_37592 = 'component_37592';
export function Component37592({ value = 37592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37592, 'data-value': derived.doubled }, children);
}
export default Component37592;
