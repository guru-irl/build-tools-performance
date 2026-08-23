import React from 'react';
const LABEL_39076 = 'component_39076';
export function Component39076({ value = 39076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39076, 'data-value': derived.doubled }, children);
}
export default Component39076;
