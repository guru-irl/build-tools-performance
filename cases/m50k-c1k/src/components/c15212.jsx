import React from 'react';
const LABEL_15212 = 'component_15212';
export function Component15212({ value = 15212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15212, 'data-value': derived.doubled }, children);
}
export default Component15212;
