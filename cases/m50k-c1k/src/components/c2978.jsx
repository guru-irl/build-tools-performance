import React from 'react';
const LABEL_2978 = 'component_2978';
export function Component2978({ value = 2978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2978, 'data-value': derived.doubled }, children);
}
export default Component2978;
