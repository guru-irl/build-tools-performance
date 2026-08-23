import React from 'react';
const LABEL_35949 = 'component_35949';
export function Component35949({ value = 35949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35949, 'data-value': derived.doubled }, children);
}
export default Component35949;
