import React from 'react';
const LABEL_22275 = 'component_22275';
export function Component22275({ value = 22275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22275, 'data-value': derived.doubled }, children);
}
export default Component22275;
