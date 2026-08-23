import React from 'react';
const LABEL_6966 = 'component_6966';
export function Component6966({ value = 6966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6966, 'data-value': derived.doubled }, children);
}
export default Component6966;
