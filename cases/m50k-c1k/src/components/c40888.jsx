import React from 'react';
const LABEL_40888 = 'component_40888';
export function Component40888({ value = 40888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40888, 'data-value': derived.doubled }, children);
}
export default Component40888;
