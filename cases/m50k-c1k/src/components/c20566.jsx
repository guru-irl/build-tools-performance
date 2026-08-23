import React from 'react';
const LABEL_20566 = 'component_20566';
export function Component20566({ value = 20566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20566, 'data-value': derived.doubled }, children);
}
export default Component20566;
