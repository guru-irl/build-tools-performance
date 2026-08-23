import React from 'react';
const LABEL_44939 = 'component_44939';
export function Component44939({ value = 44939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44939, 'data-value': derived.doubled }, children);
}
export default Component44939;
