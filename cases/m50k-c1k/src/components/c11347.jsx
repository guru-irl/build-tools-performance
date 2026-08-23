import React from 'react';
const LABEL_11347 = 'component_11347';
export function Component11347({ value = 11347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11347, 'data-value': derived.doubled }, children);
}
export default Component11347;
