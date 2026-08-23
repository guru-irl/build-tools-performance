import React from 'react';
const LABEL_18351 = 'component_18351';
export function Component18351({ value = 18351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18351, 'data-value': derived.doubled }, children);
}
export default Component18351;
