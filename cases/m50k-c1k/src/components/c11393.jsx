import React from 'react';
const LABEL_11393 = 'component_11393';
export function Component11393({ value = 11393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11393, 'data-value': derived.doubled }, children);
}
export default Component11393;
