import React from 'react';
const LABEL_38295 = 'component_38295';
export function Component38295({ value = 38295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38295, 'data-value': derived.doubled }, children);
}
export default Component38295;
