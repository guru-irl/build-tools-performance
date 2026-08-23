import React from 'react';
const LABEL_21935 = 'component_21935';
export function Component21935({ value = 21935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21935, 'data-value': derived.doubled }, children);
}
export default Component21935;
