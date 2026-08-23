import React from 'react';
const LABEL_19287 = 'component_19287';
export function Component19287({ value = 19287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19287, 'data-value': derived.doubled }, children);
}
export default Component19287;
