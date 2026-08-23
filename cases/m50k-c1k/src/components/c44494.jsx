import React from 'react';
const LABEL_44494 = 'component_44494';
export function Component44494({ value = 44494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44494, 'data-value': derived.doubled }, children);
}
export default Component44494;
