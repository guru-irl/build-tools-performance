import React from 'react';
const LABEL_27260 = 'component_27260';
export function Component27260({ value = 27260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27260, 'data-value': derived.doubled }, children);
}
export default Component27260;
