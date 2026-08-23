import React from 'react';
const LABEL_15320 = 'component_15320';
export function Component15320({ value = 15320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15320, 'data-value': derived.doubled }, children);
}
export default Component15320;
