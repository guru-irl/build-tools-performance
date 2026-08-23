import React from 'react';
const LABEL_45415 = 'component_45415';
export function Component45415({ value = 45415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45415, 'data-value': derived.doubled }, children);
}
export default Component45415;
