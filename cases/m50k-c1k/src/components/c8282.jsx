import React from 'react';
const LABEL_8282 = 'component_8282';
export function Component8282({ value = 8282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8282, 'data-value': derived.doubled }, children);
}
export default Component8282;
