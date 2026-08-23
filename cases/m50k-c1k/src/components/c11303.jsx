import React from 'react';
const LABEL_11303 = 'component_11303';
export function Component11303({ value = 11303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11303, 'data-value': derived.doubled }, children);
}
export default Component11303;
