import React from 'react';
const LABEL_31303 = 'component_31303';
export function Component31303({ value = 31303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31303, 'data-value': derived.doubled }, children);
}
export default Component31303;
