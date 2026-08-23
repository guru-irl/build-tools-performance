import React from 'react';
const LABEL_16850 = 'component_16850';
export function Component16850({ value = 16850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16850, 'data-value': derived.doubled }, children);
}
export default Component16850;
