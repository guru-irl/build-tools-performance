import React from 'react';
const LABEL_42336 = 'component_42336';
export function Component42336({ value = 42336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42336, 'data-value': derived.doubled }, children);
}
export default Component42336;
