import React from 'react';
const LABEL_30988 = 'component_30988';
export function Component30988({ value = 30988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30988, 'data-value': derived.doubled }, children);
}
export default Component30988;
