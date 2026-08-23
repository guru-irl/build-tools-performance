import React from 'react';
const LABEL_20769 = 'component_20769';
export function Component20769({ value = 20769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20769, 'data-value': derived.doubled }, children);
}
export default Component20769;
