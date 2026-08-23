import React from 'react';
const LABEL_46481 = 'component_46481';
export function Component46481({ value = 46481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46481, 'data-value': derived.doubled }, children);
}
export default Component46481;
