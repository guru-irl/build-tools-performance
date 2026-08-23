import React from 'react';
const LABEL_11971 = 'component_11971';
export function Component11971({ value = 11971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11971, 'data-value': derived.doubled }, children);
}
export default Component11971;
