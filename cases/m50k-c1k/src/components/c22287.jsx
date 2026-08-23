import React from 'react';
const LABEL_22287 = 'component_22287';
export function Component22287({ value = 22287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22287, 'data-value': derived.doubled }, children);
}
export default Component22287;
