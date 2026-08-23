import React from 'react';
const LABEL_30854 = 'component_30854';
export function Component30854({ value = 30854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30854, 'data-value': derived.doubled }, children);
}
export default Component30854;
