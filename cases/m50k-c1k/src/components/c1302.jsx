import React from 'react';
const LABEL_1302 = 'component_1302';
export function Component1302({ value = 1302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1302, 'data-value': derived.doubled }, children);
}
export default Component1302;
