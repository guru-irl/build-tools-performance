import React from 'react';
const LABEL_35571 = 'component_35571';
export function Component35571({ value = 35571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35571, 'data-value': derived.doubled }, children);
}
export default Component35571;
