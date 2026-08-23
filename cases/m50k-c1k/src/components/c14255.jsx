import React from 'react';
const LABEL_14255 = 'component_14255';
export function Component14255({ value = 14255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14255, 'data-value': derived.doubled }, children);
}
export default Component14255;
