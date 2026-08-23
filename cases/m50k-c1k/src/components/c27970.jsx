import React from 'react';
const LABEL_27970 = 'component_27970';
export function Component27970({ value = 27970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27970, 'data-value': derived.doubled }, children);
}
export default Component27970;
