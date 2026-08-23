import React from 'react';
const LABEL_26476 = 'component_26476';
export function Component26476({ value = 26476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26476, 'data-value': derived.doubled }, children);
}
export default Component26476;
