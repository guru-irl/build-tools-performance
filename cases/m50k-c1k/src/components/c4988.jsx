import React from 'react';
const LABEL_4988 = 'component_4988';
export function Component4988({ value = 4988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4988, 'data-value': derived.doubled }, children);
}
export default Component4988;
