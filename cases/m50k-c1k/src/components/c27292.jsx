import React from 'react';
const LABEL_27292 = 'component_27292';
export function Component27292({ value = 27292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27292, 'data-value': derived.doubled }, children);
}
export default Component27292;
