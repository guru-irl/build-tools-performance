import React from 'react';
const LABEL_18320 = 'component_18320';
export function Component18320({ value = 18320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18320, 'data-value': derived.doubled }, children);
}
export default Component18320;
