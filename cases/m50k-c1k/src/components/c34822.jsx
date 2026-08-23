import React from 'react';
const LABEL_34822 = 'component_34822';
export function Component34822({ value = 34822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34822, 'data-value': derived.doubled }, children);
}
export default Component34822;
