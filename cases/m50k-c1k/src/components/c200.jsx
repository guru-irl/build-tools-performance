import React from 'react';
const LABEL_200 = 'component_200';
export function Component200({ value = 200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_200, 'data-value': derived.doubled }, children);
}
export default Component200;
