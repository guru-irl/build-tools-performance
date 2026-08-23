import React from 'react';
const LABEL_26440 = 'component_26440';
export function Component26440({ value = 26440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26440, 'data-value': derived.doubled }, children);
}
export default Component26440;
