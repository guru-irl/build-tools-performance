import React from 'react';
const LABEL_16320 = 'component_16320';
export function Component16320({ value = 16320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16320, 'data-value': derived.doubled }, children);
}
export default Component16320;
