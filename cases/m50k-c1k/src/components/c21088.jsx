import React from 'react';
const LABEL_21088 = 'component_21088';
export function Component21088({ value = 21088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21088, 'data-value': derived.doubled }, children);
}
export default Component21088;
