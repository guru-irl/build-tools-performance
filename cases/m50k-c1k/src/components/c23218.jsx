import React from 'react';
const LABEL_23218 = 'component_23218';
export function Component23218({ value = 23218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23218, 'data-value': derived.doubled }, children);
}
export default Component23218;
