import React from 'react';
const LABEL_1312 = 'component_1312';
export function Component1312({ value = 1312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1312, 'data-value': derived.doubled }, children);
}
export default Component1312;
