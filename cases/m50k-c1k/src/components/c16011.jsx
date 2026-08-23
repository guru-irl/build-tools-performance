import React from 'react';
const LABEL_16011 = 'component_16011';
export function Component16011({ value = 16011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16011, 'data-value': derived.doubled }, children);
}
export default Component16011;
