import React from 'react';
const LABEL_24571 = 'component_24571';
export function Component24571({ value = 24571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24571, 'data-value': derived.doubled }, children);
}
export default Component24571;
