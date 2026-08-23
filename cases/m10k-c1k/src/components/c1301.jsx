import React from 'react';
const LABEL_1301 = 'component_1301';
export function Component1301({ value = 1301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1301, 'data-value': derived.doubled }, children);
}
export default Component1301;
