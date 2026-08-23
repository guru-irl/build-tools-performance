import React from 'react';
const LABEL_39749 = 'component_39749';
export function Component39749({ value = 39749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39749, 'data-value': derived.doubled }, children);
}
export default Component39749;
