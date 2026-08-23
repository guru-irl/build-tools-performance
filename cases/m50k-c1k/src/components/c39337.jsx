import React from 'react';
const LABEL_39337 = 'component_39337';
export function Component39337({ value = 39337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39337, 'data-value': derived.doubled }, children);
}
export default Component39337;
