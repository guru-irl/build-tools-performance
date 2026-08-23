import React from 'react';
const LABEL_1244 = 'component_1244';
export function Component1244({ value = 1244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1244, 'data-value': derived.doubled }, children);
}
export default Component1244;
