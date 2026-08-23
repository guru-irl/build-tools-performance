import React from 'react';
const LABEL_27976 = 'component_27976';
export function Component27976({ value = 27976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27976, 'data-value': derived.doubled }, children);
}
export default Component27976;
