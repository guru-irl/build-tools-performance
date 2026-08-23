import React from 'react';
const LABEL_36508 = 'component_36508';
export function Component36508({ value = 36508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36508, 'data-value': derived.doubled }, children);
}
export default Component36508;
