import React from 'react';
const LABEL_19240 = 'component_19240';
export function Component19240({ value = 19240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19240, 'data-value': derived.doubled }, children);
}
export default Component19240;
