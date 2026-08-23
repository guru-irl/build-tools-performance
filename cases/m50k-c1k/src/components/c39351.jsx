import React from 'react';
const LABEL_39351 = 'component_39351';
export function Component39351({ value = 39351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39351, 'data-value': derived.doubled }, children);
}
export default Component39351;
