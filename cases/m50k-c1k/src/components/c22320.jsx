import React from 'react';
const LABEL_22320 = 'component_22320';
export function Component22320({ value = 22320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22320, 'data-value': derived.doubled }, children);
}
export default Component22320;
