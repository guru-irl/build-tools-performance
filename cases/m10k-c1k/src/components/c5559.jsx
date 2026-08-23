import React from 'react';
const LABEL_5559 = 'component_5559';
export function Component5559({ value = 5559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5559, 'data-value': derived.doubled }, children);
}
export default Component5559;
