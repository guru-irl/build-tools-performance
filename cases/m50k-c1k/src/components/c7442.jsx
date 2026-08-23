import React from 'react';
const LABEL_7442 = 'component_7442';
export function Component7442({ value = 7442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7442, 'data-value': derived.doubled }, children);
}
export default Component7442;
