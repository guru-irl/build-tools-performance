import React from 'react';
const LABEL_34668 = 'component_34668';
export function Component34668({ value = 34668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34668, 'data-value': derived.doubled }, children);
}
export default Component34668;
