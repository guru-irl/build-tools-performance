import React from 'react';
const LABEL_34667 = 'component_34667';
export function Component34667({ value = 34667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34667, 'data-value': derived.doubled }, children);
}
export default Component34667;
