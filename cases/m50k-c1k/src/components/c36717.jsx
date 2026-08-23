import React from 'react';
const LABEL_36717 = 'component_36717';
export function Component36717({ value = 36717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36717, 'data-value': derived.doubled }, children);
}
export default Component36717;
