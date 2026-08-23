import React from 'react';
const LABEL_27436 = 'component_27436';
export function Component27436({ value = 27436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27436, 'data-value': derived.doubled }, children);
}
export default Component27436;
