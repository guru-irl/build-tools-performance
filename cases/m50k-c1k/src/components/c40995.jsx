import React from 'react';
const LABEL_40995 = 'component_40995';
export function Component40995({ value = 40995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40995, 'data-value': derived.doubled }, children);
}
export default Component40995;
