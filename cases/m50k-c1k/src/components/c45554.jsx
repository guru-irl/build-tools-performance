import React from 'react';
const LABEL_45554 = 'component_45554';
export function Component45554({ value = 45554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45554, 'data-value': derived.doubled }, children);
}
export default Component45554;
