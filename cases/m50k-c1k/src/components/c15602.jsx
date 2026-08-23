import React from 'react';
const LABEL_15602 = 'component_15602';
export function Component15602({ value = 15602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15602, 'data-value': derived.doubled }, children);
}
export default Component15602;
