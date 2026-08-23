import React from 'react';
const LABEL_28045 = 'component_28045';
export function Component28045({ value = 28045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28045, 'data-value': derived.doubled }, children);
}
export default Component28045;
