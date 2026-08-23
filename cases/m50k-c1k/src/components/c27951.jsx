import React from 'react';
const LABEL_27951 = 'component_27951';
export function Component27951({ value = 27951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27951, 'data-value': derived.doubled }, children);
}
export default Component27951;
