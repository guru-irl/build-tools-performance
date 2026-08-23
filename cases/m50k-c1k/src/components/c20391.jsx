import React from 'react';
const LABEL_20391 = 'component_20391';
export function Component20391({ value = 20391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20391, 'data-value': derived.doubled }, children);
}
export default Component20391;
