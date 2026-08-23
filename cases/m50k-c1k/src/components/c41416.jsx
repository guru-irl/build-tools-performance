import React from 'react';
const LABEL_41416 = 'component_41416';
export function Component41416({ value = 41416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41416, 'data-value': derived.doubled }, children);
}
export default Component41416;
