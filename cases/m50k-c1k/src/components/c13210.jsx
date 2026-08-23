import React from 'react';
const LABEL_13210 = 'component_13210';
export function Component13210({ value = 13210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13210, 'data-value': derived.doubled }, children);
}
export default Component13210;
