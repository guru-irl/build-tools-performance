import React from 'react';
const LABEL_9155 = 'component_9155';
export function Component9155({ value = 9155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9155, 'data-value': derived.doubled }, children);
}
export default Component9155;
