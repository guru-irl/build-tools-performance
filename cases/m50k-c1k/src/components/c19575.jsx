import React from 'react';
const LABEL_19575 = 'component_19575';
export function Component19575({ value = 19575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19575, 'data-value': derived.doubled }, children);
}
export default Component19575;
