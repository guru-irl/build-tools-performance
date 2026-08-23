import React from 'react';
const LABEL_36404 = 'component_36404';
export function Component36404({ value = 36404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36404, 'data-value': derived.doubled }, children);
}
export default Component36404;
