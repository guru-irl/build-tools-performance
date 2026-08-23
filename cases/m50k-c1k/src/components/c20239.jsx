import React from 'react';
const LABEL_20239 = 'component_20239';
export function Component20239({ value = 20239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20239, 'data-value': derived.doubled }, children);
}
export default Component20239;
