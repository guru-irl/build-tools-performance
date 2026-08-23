import React from 'react';
const LABEL_35320 = 'component_35320';
export function Component35320({ value = 35320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35320, 'data-value': derived.doubled }, children);
}
export default Component35320;
