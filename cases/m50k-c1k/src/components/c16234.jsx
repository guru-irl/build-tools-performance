import React from 'react';
const LABEL_16234 = 'component_16234';
export function Component16234({ value = 16234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16234, 'data-value': derived.doubled }, children);
}
export default Component16234;
