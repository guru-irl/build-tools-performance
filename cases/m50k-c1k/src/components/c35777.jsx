import React from 'react';
const LABEL_35777 = 'component_35777';
export function Component35777({ value = 35777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35777, 'data-value': derived.doubled }, children);
}
export default Component35777;
