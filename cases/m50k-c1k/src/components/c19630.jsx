import React from 'react';
const LABEL_19630 = 'component_19630';
export function Component19630({ value = 19630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19630, 'data-value': derived.doubled }, children);
}
export default Component19630;
