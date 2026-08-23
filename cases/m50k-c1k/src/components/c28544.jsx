import React from 'react';
const LABEL_28544 = 'component_28544';
export function Component28544({ value = 28544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28544, 'data-value': derived.doubled }, children);
}
export default Component28544;
