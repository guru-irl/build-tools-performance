import React from 'react';
const LABEL_20306 = 'component_20306';
export function Component20306({ value = 20306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20306, 'data-value': derived.doubled }, children);
}
export default Component20306;
