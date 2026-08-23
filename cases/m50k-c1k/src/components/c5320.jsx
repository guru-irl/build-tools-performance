import React from 'react';
const LABEL_5320 = 'component_5320';
export function Component5320({ value = 5320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5320, 'data-value': derived.doubled }, children);
}
export default Component5320;
