import React from 'react';
const LABEL_13575 = 'component_13575';
export function Component13575({ value = 13575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13575, 'data-value': derived.doubled }, children);
}
export default Component13575;
