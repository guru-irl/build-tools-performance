import React from 'react';
const LABEL_8320 = 'component_8320';
export function Component8320({ value = 8320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8320, 'data-value': derived.doubled }, children);
}
export default Component8320;
