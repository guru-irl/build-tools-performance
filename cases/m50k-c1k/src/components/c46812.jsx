import React from 'react';
const LABEL_46812 = 'component_46812';
export function Component46812({ value = 46812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46812, 'data-value': derived.doubled }, children);
}
export default Component46812;
