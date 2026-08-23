import React from 'react';
const LABEL_30045 = 'component_30045';
export function Component30045({ value = 30045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30045, 'data-value': derived.doubled }, children);
}
export default Component30045;
