import React from 'react';
const LABEL_14209 = 'component_14209';
export function Component14209({ value = 14209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14209, 'data-value': derived.doubled }, children);
}
export default Component14209;
