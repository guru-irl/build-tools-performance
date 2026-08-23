import React from 'react';
const LABEL_20320 = 'component_20320';
export function Component20320({ value = 20320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20320, 'data-value': derived.doubled }, children);
}
export default Component20320;
