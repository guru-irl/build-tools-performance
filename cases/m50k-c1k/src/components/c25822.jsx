import React from 'react';
const LABEL_25822 = 'component_25822';
export function Component25822({ value = 25822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25822, 'data-value': derived.doubled }, children);
}
export default Component25822;
