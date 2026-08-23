import React from 'react';
const LABEL_32200 = 'component_32200';
export function Component32200({ value = 32200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32200, 'data-value': derived.doubled }, children);
}
export default Component32200;
