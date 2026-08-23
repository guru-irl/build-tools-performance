import React from 'react';
const LABEL_1981 = 'component_1981';
export function Component1981({ value = 1981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1981, 'data-value': derived.doubled }, children);
}
export default Component1981;
