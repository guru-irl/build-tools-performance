import React from 'react';
const LABEL_39179 = 'component_39179';
export function Component39179({ value = 39179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39179, 'data-value': derived.doubled }, children);
}
export default Component39179;
