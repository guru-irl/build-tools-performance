import React from 'react';
const LABEL_35985 = 'component_35985';
export function Component35985({ value = 35985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35985, 'data-value': derived.doubled }, children);
}
export default Component35985;
