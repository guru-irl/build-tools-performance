import React from 'react';
const LABEL_31517 = 'component_31517';
export function Component31517({ value = 31517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31517, 'data-value': derived.doubled }, children);
}
export default Component31517;
