import React from 'react';
const LABEL_1582 = 'component_1582';
export function Component1582({ value = 1582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1582, 'data-value': derived.doubled }, children);
}
export default Component1582;
