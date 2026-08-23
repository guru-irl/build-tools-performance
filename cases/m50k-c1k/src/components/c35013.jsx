import React from 'react';
const LABEL_35013 = 'component_35013';
export function Component35013({ value = 35013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35013, 'data-value': derived.doubled }, children);
}
export default Component35013;
