import React from 'react';
const LABEL_42177 = 'component_42177';
export function Component42177({ value = 42177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42177, 'data-value': derived.doubled }, children);
}
export default Component42177;
