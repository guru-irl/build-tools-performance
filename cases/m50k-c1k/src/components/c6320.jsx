import React from 'react';
const LABEL_6320 = 'component_6320';
export function Component6320({ value = 6320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6320, 'data-value': derived.doubled }, children);
}
export default Component6320;
