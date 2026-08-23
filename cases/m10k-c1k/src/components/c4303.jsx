import React from 'react';
const LABEL_4303 = 'component_4303';
export function Component4303({ value = 4303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4303, 'data-value': derived.doubled }, children);
}
export default Component4303;
