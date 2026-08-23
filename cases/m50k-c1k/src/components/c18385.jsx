import React from 'react';
const LABEL_18385 = 'component_18385';
export function Component18385({ value = 18385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18385, 'data-value': derived.doubled }, children);
}
export default Component18385;
