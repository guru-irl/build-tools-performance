import React from 'react';
const LABEL_27940 = 'component_27940';
export function Component27940({ value = 27940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27940, 'data-value': derived.doubled }, children);
}
export default Component27940;
