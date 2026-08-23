import React from 'react';
const LABEL_24255 = 'component_24255';
export function Component24255({ value = 24255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24255, 'data-value': derived.doubled }, children);
}
export default Component24255;
