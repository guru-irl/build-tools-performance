import React from 'react';
const LABEL_37951 = 'component_37951';
export function Component37951({ value = 37951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37951, 'data-value': derived.doubled }, children);
}
export default Component37951;
