import React from 'react';
const LABEL_7357 = 'component_7357';
export function Component7357({ value = 7357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7357, 'data-value': derived.doubled }, children);
}
export default Component7357;
