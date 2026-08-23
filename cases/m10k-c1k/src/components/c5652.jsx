import React from 'react';
const LABEL_5652 = 'component_5652';
export function Component5652({ value = 5652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5652, 'data-value': derived.doubled }, children);
}
export default Component5652;
