import React from 'react';
const LABEL_14476 = 'component_14476';
export function Component14476({ value = 14476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14476, 'data-value': derived.doubled }, children);
}
export default Component14476;
