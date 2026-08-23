import React from 'react';
const LABEL_46476 = 'component_46476';
export function Component46476({ value = 46476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46476, 'data-value': derived.doubled }, children);
}
export default Component46476;
