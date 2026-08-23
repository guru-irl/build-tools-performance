import React from 'react';
const LABEL_1297 = 'component_1297';
export function Component1297({ value = 1297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1297, 'data-value': derived.doubled }, children);
}
export default Component1297;
