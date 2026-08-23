import React from 'react';
const LABEL_5571 = 'component_5571';
export function Component5571({ value = 5571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5571, 'data-value': derived.doubled }, children);
}
export default Component5571;
