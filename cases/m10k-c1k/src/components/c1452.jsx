import React from 'react';
const LABEL_1452 = 'component_1452';
export function Component1452({ value = 1452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1452, 'data-value': derived.doubled }, children);
}
export default Component1452;
