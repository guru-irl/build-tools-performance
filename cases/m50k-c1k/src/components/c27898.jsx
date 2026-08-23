import React from 'react';
const LABEL_27898 = 'component_27898';
export function Component27898({ value = 27898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27898, 'data-value': derived.doubled }, children);
}
export default Component27898;
