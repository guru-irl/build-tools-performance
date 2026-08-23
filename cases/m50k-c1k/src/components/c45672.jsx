import React from 'react';
const LABEL_45672 = 'component_45672';
export function Component45672({ value = 45672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45672, 'data-value': derived.doubled }, children);
}
export default Component45672;
