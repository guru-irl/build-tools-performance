import React from 'react';
const LABEL_13070 = 'component_13070';
export function Component13070({ value = 13070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13070, 'data-value': derived.doubled }, children);
}
export default Component13070;
