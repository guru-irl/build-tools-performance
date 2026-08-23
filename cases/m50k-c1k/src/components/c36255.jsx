import React from 'react';
const LABEL_36255 = 'component_36255';
export function Component36255({ value = 36255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36255, 'data-value': derived.doubled }, children);
}
export default Component36255;
