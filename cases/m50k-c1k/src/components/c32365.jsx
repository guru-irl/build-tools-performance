import React from 'react';
const LABEL_32365 = 'component_32365';
export function Component32365({ value = 32365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32365, 'data-value': derived.doubled }, children);
}
export default Component32365;
