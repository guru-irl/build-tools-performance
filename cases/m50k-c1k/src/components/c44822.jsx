import React from 'react';
const LABEL_44822 = 'component_44822';
export function Component44822({ value = 44822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44822, 'data-value': derived.doubled }, children);
}
export default Component44822;
