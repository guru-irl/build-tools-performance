import React from 'react';
const LABEL_39180 = 'component_39180';
export function Component39180({ value = 39180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39180, 'data-value': derived.doubled }, children);
}
export default Component39180;
