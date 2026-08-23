import React from 'react';
const LABEL_20192 = 'component_20192';
export function Component20192({ value = 20192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20192, 'data-value': derived.doubled }, children);
}
export default Component20192;
