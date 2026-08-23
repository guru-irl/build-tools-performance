import React from 'react';
const LABEL_28282 = 'component_28282';
export function Component28282({ value = 28282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28282, 'data-value': derived.doubled }, children);
}
export default Component28282;
