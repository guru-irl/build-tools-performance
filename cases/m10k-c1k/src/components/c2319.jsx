import React from 'react';
const LABEL_2319 = 'component_2319';
export function Component2319({ value = 2319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2319, 'data-value': derived.doubled }, children);
}
export default Component2319;
