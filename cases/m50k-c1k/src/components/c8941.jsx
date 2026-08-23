import React from 'react';
const LABEL_8941 = 'component_8941';
export function Component8941({ value = 8941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8941, 'data-value': derived.doubled }, children);
}
export default Component8941;
