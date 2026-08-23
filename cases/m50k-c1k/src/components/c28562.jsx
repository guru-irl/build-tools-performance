import React from 'react';
const LABEL_28562 = 'component_28562';
export function Component28562({ value = 28562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28562, 'data-value': derived.doubled }, children);
}
export default Component28562;
