import React from 'react';
const LABEL_1074 = 'component_1074';
export function Component1074({ value = 1074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1074, 'data-value': derived.doubled }, children);
}
export default Component1074;
