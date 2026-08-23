import React from 'react';
const LABEL_22180 = 'component_22180';
export function Component22180({ value = 22180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22180, 'data-value': derived.doubled }, children);
}
export default Component22180;
