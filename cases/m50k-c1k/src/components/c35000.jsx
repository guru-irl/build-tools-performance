import React from 'react';
const LABEL_35000 = 'component_35000';
export function Component35000({ value = 35000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35000, 'data-value': derived.doubled }, children);
}
export default Component35000;
