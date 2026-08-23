import React from 'react';
const LABEL_22988 = 'component_22988';
export function Component22988({ value = 22988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22988, 'data-value': derived.doubled }, children);
}
export default Component22988;
