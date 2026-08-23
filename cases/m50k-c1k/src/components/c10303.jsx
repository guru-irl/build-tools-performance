import React from 'react';
const LABEL_10303 = 'component_10303';
export function Component10303({ value = 10303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10303, 'data-value': derived.doubled }, children);
}
export default Component10303;
