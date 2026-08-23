import React from 'react';
const LABEL_35507 = 'component_35507';
export function Component35507({ value = 35507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35507, 'data-value': derived.doubled }, children);
}
export default Component35507;
