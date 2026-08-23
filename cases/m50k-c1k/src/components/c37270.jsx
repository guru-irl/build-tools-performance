import React from 'react';
const LABEL_37270 = 'component_37270';
export function Component37270({ value = 37270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37270, 'data-value': derived.doubled }, children);
}
export default Component37270;
