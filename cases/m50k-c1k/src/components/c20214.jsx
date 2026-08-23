import React from 'react';
const LABEL_20214 = 'component_20214';
export function Component20214({ value = 20214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20214, 'data-value': derived.doubled }, children);
}
export default Component20214;
