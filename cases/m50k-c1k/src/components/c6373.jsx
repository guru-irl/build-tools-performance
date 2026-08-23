import React from 'react';
const LABEL_6373 = 'component_6373';
export function Component6373({ value = 6373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6373, 'data-value': derived.doubled }, children);
}
export default Component6373;
