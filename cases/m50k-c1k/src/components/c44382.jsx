import React from 'react';
const LABEL_44382 = 'component_44382';
export function Component44382({ value = 44382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44382, 'data-value': derived.doubled }, children);
}
export default Component44382;
