import React from 'react';
const LABEL_37476 = 'component_37476';
export function Component37476({ value = 37476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37476, 'data-value': derived.doubled }, children);
}
export default Component37476;
