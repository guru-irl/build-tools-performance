import React from 'react';
const LABEL_15742 = 'component_15742';
export function Component15742({ value = 15742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15742, 'data-value': derived.doubled }, children);
}
export default Component15742;
