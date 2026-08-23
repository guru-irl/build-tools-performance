import React from 'react';
const LABEL_6086 = 'component_6086';
export function Component6086({ value = 6086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6086, 'data-value': derived.doubled }, children);
}
export default Component6086;
