import React from 'react';
const LABEL_45634 = 'component_45634';
export function Component45634({ value = 45634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45634, 'data-value': derived.doubled }, children);
}
export default Component45634;
