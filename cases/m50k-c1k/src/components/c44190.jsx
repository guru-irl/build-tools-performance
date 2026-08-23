import React from 'react';
const LABEL_44190 = 'component_44190';
export function Component44190({ value = 44190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44190, 'data-value': derived.doubled }, children);
}
export default Component44190;
