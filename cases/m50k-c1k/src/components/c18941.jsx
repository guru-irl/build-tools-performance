import React from 'react';
const LABEL_18941 = 'component_18941';
export function Component18941({ value = 18941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18941, 'data-value': derived.doubled }, children);
}
export default Component18941;
