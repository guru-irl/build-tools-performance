import React from 'react';
const LABEL_41822 = 'component_41822';
export function Component41822({ value = 41822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41822, 'data-value': derived.doubled }, children);
}
export default Component41822;
