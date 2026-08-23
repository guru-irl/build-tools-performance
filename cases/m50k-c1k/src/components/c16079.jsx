import React from 'react';
const LABEL_16079 = 'component_16079';
export function Component16079({ value = 16079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16079, 'data-value': derived.doubled }, children);
}
export default Component16079;
