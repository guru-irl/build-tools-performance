import React from 'react';
const LABEL_1888 = 'component_1888';
export function Component1888({ value = 1888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1888, 'data-value': derived.doubled }, children);
}
export default Component1888;
