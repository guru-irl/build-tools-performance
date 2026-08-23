import React from 'react';
const LABEL_1239 = 'component_1239';
export function Component1239({ value = 1239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1239, 'data-value': derived.doubled }, children);
}
export default Component1239;
