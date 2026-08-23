import React from 'react';
const LABEL_38299 = 'component_38299';
export function Component38299({ value = 38299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38299, 'data-value': derived.doubled }, children);
}
export default Component38299;
