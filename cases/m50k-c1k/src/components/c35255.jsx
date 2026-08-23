import React from 'react';
const LABEL_35255 = 'component_35255';
export function Component35255({ value = 35255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35255, 'data-value': derived.doubled }, children);
}
export default Component35255;
