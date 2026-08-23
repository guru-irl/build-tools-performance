import React from 'react';
const LABEL_31404 = 'component_31404';
export function Component31404({ value = 31404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31404, 'data-value': derived.doubled }, children);
}
export default Component31404;
