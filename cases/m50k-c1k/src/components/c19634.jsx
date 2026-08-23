import React from 'react';
const LABEL_19634 = 'component_19634';
export function Component19634({ value = 19634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19634, 'data-value': derived.doubled }, children);
}
export default Component19634;
