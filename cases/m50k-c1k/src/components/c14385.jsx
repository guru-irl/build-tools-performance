import React from 'react';
const LABEL_14385 = 'component_14385';
export function Component14385({ value = 14385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14385, 'data-value': derived.doubled }, children);
}
export default Component14385;
