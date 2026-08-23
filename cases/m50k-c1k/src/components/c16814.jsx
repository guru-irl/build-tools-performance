import React from 'react';
const LABEL_16814 = 'component_16814';
export function Component16814({ value = 16814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16814, 'data-value': derived.doubled }, children);
}
export default Component16814;
