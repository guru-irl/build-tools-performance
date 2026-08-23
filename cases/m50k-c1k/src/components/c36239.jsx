import React from 'react';
const LABEL_36239 = 'component_36239';
export function Component36239({ value = 36239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36239, 'data-value': derived.doubled }, children);
}
export default Component36239;
