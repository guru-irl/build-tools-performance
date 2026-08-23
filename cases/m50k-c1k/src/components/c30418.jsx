import React from 'react';
const LABEL_30418 = 'component_30418';
export function Component30418({ value = 30418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30418, 'data-value': derived.doubled }, children);
}
export default Component30418;
