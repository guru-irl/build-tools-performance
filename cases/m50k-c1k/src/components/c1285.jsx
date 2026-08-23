import React from 'react';
const LABEL_1285 = 'component_1285';
export function Component1285({ value = 1285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1285, 'data-value': derived.doubled }, children);
}
export default Component1285;
