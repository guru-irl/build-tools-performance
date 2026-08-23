import React from 'react';
const LABEL_19539 = 'component_19539';
export function Component19539({ value = 19539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19539, 'data-value': derived.doubled }, children);
}
export default Component19539;
