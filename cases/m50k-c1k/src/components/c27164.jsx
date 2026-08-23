import React from 'react';
const LABEL_27164 = 'component_27164';
export function Component27164({ value = 27164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27164, 'data-value': derived.doubled }, children);
}
export default Component27164;
