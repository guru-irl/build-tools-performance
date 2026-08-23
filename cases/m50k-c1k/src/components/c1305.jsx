import React from 'react';
const LABEL_1305 = 'component_1305';
export function Component1305({ value = 1305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1305, 'data-value': derived.doubled }, children);
}
export default Component1305;
