import React from 'react';
const LABEL_44303 = 'component_44303';
export function Component44303({ value = 44303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44303, 'data-value': derived.doubled }, children);
}
export default Component44303;
