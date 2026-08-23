import React from 'react';
const LABEL_35822 = 'component_35822';
export function Component35822({ value = 35822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35822, 'data-value': derived.doubled }, children);
}
export default Component35822;
