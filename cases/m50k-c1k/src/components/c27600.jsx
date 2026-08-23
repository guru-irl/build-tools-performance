import React from 'react';
const LABEL_27600 = 'component_27600';
export function Component27600({ value = 27600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27600, 'data-value': derived.doubled }, children);
}
export default Component27600;
