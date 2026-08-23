import React from 'react';
const LABEL_22282 = 'component_22282';
export function Component22282({ value = 22282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22282, 'data-value': derived.doubled }, children);
}
export default Component22282;
