import React from 'react';
const LABEL_35854 = 'component_35854';
export function Component35854({ value = 35854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35854, 'data-value': derived.doubled }, children);
}
export default Component35854;
