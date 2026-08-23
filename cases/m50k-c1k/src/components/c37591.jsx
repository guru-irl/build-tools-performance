import React from 'react';
const LABEL_37591 = 'component_37591';
export function Component37591({ value = 37591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37591, 'data-value': derived.doubled }, children);
}
export default Component37591;
