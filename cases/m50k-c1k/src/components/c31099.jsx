import React from 'react';
const LABEL_31099 = 'component_31099';
export function Component31099({ value = 31099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31099, 'data-value': derived.doubled }, children);
}
export default Component31099;
