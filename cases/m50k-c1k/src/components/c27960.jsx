import React from 'react';
const LABEL_27960 = 'component_27960';
export function Component27960({ value = 27960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27960, 'data-value': derived.doubled }, children);
}
export default Component27960;
