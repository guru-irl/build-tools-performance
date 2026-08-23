import React from 'react';
const LABEL_24045 = 'component_24045';
export function Component24045({ value = 24045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24045, 'data-value': derived.doubled }, children);
}
export default Component24045;
