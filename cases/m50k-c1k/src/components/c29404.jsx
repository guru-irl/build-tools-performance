import React from 'react';
const LABEL_29404 = 'component_29404';
export function Component29404({ value = 29404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29404, 'data-value': derived.doubled }, children);
}
export default Component29404;
