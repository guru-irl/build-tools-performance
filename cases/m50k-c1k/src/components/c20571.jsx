import React from 'react';
const LABEL_20571 = 'component_20571';
export function Component20571({ value = 20571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20571, 'data-value': derived.doubled }, children);
}
export default Component20571;
