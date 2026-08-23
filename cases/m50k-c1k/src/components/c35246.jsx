import React from 'react';
const LABEL_35246 = 'component_35246';
export function Component35246({ value = 35246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35246, 'data-value': derived.doubled }, children);
}
export default Component35246;
