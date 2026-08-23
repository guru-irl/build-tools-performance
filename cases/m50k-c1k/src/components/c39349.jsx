import React from 'react';
const LABEL_39349 = 'component_39349';
export function Component39349({ value = 39349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39349, 'data-value': derived.doubled }, children);
}
export default Component39349;
