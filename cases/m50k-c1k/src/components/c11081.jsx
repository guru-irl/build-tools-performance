import React from 'react';
const LABEL_11081 = 'component_11081';
export function Component11081({ value = 11081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11081, 'data-value': derived.doubled }, children);
}
export default Component11081;
