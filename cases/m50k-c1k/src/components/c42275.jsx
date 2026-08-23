import React from 'react';
const LABEL_42275 = 'component_42275';
export function Component42275({ value = 42275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42275, 'data-value': derived.doubled }, children);
}
export default Component42275;
