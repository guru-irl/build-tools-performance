import React from 'react';
const LABEL_15546 = 'component_15546';
export function Component15546({ value = 15546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15546, 'data-value': derived.doubled }, children);
}
export default Component15546;
