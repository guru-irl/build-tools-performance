import React from 'react';
const LABEL_46273 = 'component_46273';
export function Component46273({ value = 46273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46273, 'data-value': derived.doubled }, children);
}
export default Component46273;
