import React from 'react';
const LABEL_35042 = 'component_35042';
export function Component35042({ value = 35042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35042, 'data-value': derived.doubled }, children);
}
export default Component35042;
