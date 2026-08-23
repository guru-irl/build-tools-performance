import React from 'react';
const LABEL_13228 = 'component_13228';
export function Component13228({ value = 13228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13228, 'data-value': derived.doubled }, children);
}
export default Component13228;
