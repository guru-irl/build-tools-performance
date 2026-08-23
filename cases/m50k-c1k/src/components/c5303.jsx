import React from 'react';
const LABEL_5303 = 'component_5303';
export function Component5303({ value = 5303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5303, 'data-value': derived.doubled }, children);
}
export default Component5303;
