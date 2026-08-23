import React from 'react';
const LABEL_23086 = 'component_23086';
export function Component23086({ value = 23086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23086, 'data-value': derived.doubled }, children);
}
export default Component23086;
