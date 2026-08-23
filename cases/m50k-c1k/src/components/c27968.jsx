import React from 'react';
const LABEL_27968 = 'component_27968';
export function Component27968({ value = 27968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27968, 'data-value': derived.doubled }, children);
}
export default Component27968;
