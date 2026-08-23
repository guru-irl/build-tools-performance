import React from 'react';
const LABEL_44498 = 'component_44498';
export function Component44498({ value = 44498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44498, 'data-value': derived.doubled }, children);
}
export default Component44498;
