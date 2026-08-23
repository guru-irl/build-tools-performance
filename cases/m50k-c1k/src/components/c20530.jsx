import React from 'react';
const LABEL_20530 = 'component_20530';
export function Component20530({ value = 20530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20530, 'data-value': derived.doubled }, children);
}
export default Component20530;
