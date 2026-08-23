import React from 'react';
const LABEL_45111 = 'component_45111';
export function Component45111({ value = 45111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45111, 'data-value': derived.doubled }, children);
}
export default Component45111;
