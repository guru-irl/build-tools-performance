import React from 'react';
const LABEL_19320 = 'component_19320';
export function Component19320({ value = 19320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19320, 'data-value': derived.doubled }, children);
}
export default Component19320;
