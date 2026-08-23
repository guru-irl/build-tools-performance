import React from 'react';
const LABEL_24171 = 'component_24171';
export function Component24171({ value = 24171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24171, 'data-value': derived.doubled }, children);
}
export default Component24171;
