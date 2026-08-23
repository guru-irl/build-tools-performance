import React from 'react';
const LABEL_35303 = 'component_35303';
export function Component35303({ value = 35303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35303, 'data-value': derived.doubled }, children);
}
export default Component35303;
