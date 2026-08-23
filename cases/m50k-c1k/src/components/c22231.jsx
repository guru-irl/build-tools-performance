import React from 'react';
const LABEL_22231 = 'component_22231';
export function Component22231({ value = 22231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22231, 'data-value': derived.doubled }, children);
}
export default Component22231;
