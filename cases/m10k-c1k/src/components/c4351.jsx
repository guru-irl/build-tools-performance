import React from 'react';
const LABEL_4351 = 'component_4351';
export function Component4351({ value = 4351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4351, 'data-value': derived.doubled }, children);
}
export default Component4351;
