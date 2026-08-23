import React from 'react';
const LABEL_23466 = 'component_23466';
export function Component23466({ value = 23466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23466, 'data-value': derived.doubled }, children);
}
export default Component23466;
