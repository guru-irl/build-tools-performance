import React from 'react';
const LABEL_44481 = 'component_44481';
export function Component44481({ value = 44481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44481, 'data-value': derived.doubled }, children);
}
export default Component44481;
