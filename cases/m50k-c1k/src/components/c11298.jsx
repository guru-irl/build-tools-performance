import React from 'react';
const LABEL_11298 = 'component_11298';
export function Component11298({ value = 11298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11298, 'data-value': derived.doubled }, children);
}
export default Component11298;
