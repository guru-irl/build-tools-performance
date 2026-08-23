import React from 'react';
const LABEL_35816 = 'component_35816';
export function Component35816({ value = 35816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35816, 'data-value': derived.doubled }, children);
}
export default Component35816;
