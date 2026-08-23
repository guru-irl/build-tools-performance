import React from 'react';
const LABEL_1224 = 'component_1224';
export function Component1224({ value = 1224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1224, 'data-value': derived.doubled }, children);
}
export default Component1224;
