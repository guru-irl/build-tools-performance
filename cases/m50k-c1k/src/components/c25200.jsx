import React from 'react';
const LABEL_25200 = 'component_25200';
export function Component25200({ value = 25200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25200, 'data-value': derived.doubled }, children);
}
export default Component25200;
