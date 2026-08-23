import React from 'react';
const LABEL_26320 = 'component_26320';
export function Component26320({ value = 26320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26320, 'data-value': derived.doubled }, children);
}
export default Component26320;
