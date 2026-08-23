import React from 'react';
const LABEL_17441 = 'component_17441';
export function Component17441({ value = 17441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17441, 'data-value': derived.doubled }, children);
}
export default Component17441;
