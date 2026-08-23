import React from 'react';
const LABEL_39242 = 'component_39242';
export function Component39242({ value = 39242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39242, 'data-value': derived.doubled }, children);
}
export default Component39242;
