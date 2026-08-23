import React from 'react';
const LABEL_37320 = 'component_37320';
export function Component37320({ value = 37320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37320, 'data-value': derived.doubled }, children);
}
export default Component37320;
