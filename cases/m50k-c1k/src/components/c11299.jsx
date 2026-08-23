import React from 'react';
const LABEL_11299 = 'component_11299';
export function Component11299({ value = 11299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11299, 'data-value': derived.doubled }, children);
}
export default Component11299;
