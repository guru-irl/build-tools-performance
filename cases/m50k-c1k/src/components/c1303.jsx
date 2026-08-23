import React from 'react';
const LABEL_1303 = 'component_1303';
export function Component1303({ value = 1303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1303, 'data-value': derived.doubled }, children);
}
export default Component1303;
