import React from 'react';
const LABEL_5539 = 'component_5539';
export function Component5539({ value = 5539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5539, 'data-value': derived.doubled }, children);
}
export default Component5539;
