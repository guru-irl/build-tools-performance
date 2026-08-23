import React from 'react';
const LABEL_1218 = 'component_1218';
export function Component1218({ value = 1218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1218, 'data-value': derived.doubled }, children);
}
export default Component1218;
