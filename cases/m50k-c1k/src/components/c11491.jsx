import React from 'react';
const LABEL_11491 = 'component_11491';
export function Component11491({ value = 11491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11491, 'data-value': derived.doubled }, children);
}
export default Component11491;
