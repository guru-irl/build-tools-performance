import React from 'react';
const LABEL_12270 = 'component_12270';
export function Component12270({ value = 12270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12270, 'data-value': derived.doubled }, children);
}
export default Component12270;
