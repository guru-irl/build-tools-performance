import React from 'react';
const LABEL_12993 = 'component_12993';
export function Component12993({ value = 12993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12993, 'data-value': derived.doubled }, children);
}
export default Component12993;
