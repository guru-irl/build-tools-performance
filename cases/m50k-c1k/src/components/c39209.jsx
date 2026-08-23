import React from 'react';
const LABEL_39209 = 'component_39209';
export function Component39209({ value = 39209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39209, 'data-value': derived.doubled }, children);
}
export default Component39209;
