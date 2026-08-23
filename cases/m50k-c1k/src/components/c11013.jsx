import React from 'react';
const LABEL_11013 = 'component_11013';
export function Component11013({ value = 11013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11013, 'data-value': derived.doubled }, children);
}
export default Component11013;
