import React from 'react';
const LABEL_36822 = 'component_36822';
export function Component36822({ value = 36822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36822, 'data-value': derived.doubled }, children);
}
export default Component36822;
