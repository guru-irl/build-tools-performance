import React from 'react';
const LABEL_44013 = 'component_44013';
export function Component44013({ value = 44013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44013, 'data-value': derived.doubled }, children);
}
export default Component44013;
