import React from 'react';
const LABEL_1424 = 'component_1424';
export function Component1424({ value = 1424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1424, 'data-value': derived.doubled }, children);
}
export default Component1424;
