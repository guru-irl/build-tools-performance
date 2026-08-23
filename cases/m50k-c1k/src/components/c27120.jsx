import React from 'react';
const LABEL_27120 = 'component_27120';
export function Component27120({ value = 27120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27120, 'data-value': derived.doubled }, children);
}
export default Component27120;
