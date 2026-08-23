import React from 'react';
const LABEL_15936 = 'component_15936';
export function Component15936({ value = 15936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15936, 'data-value': derived.doubled }, children);
}
export default Component15936;
