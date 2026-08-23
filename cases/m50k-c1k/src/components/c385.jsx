import React from 'react';
const LABEL_385 = 'component_385';
export function Component385({ value = 385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_385, 'data-value': derived.doubled }, children);
}
export default Component385;
