import React from 'react';
const LABEL_37202 = 'component_37202';
export function Component37202({ value = 37202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37202, 'data-value': derived.doubled }, children);
}
export default Component37202;
