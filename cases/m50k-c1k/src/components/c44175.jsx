import React from 'react';
const LABEL_44175 = 'component_44175';
export function Component44175({ value = 44175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44175, 'data-value': derived.doubled }, children);
}
export default Component44175;
