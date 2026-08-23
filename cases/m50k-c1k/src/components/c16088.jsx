import React from 'react';
const LABEL_16088 = 'component_16088';
export function Component16088({ value = 16088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16088, 'data-value': derived.doubled }, children);
}
export default Component16088;
