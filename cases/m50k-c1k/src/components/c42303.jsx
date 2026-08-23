import React from 'react';
const LABEL_42303 = 'component_42303';
export function Component42303({ value = 42303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42303, 'data-value': derived.doubled }, children);
}
export default Component42303;
