import React from 'react';
const LABEL_5474 = 'component_5474';
export function Component5474({ value = 5474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5474, 'data-value': derived.doubled }, children);
}
export default Component5474;
