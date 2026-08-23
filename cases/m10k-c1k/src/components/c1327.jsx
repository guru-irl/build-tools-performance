import React from 'react';
const LABEL_1327 = 'component_1327';
export function Component1327({ value = 1327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1327, 'data-value': derived.doubled }, children);
}
export default Component1327;
