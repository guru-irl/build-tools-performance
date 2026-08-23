import React from 'react';
const LABEL_34269 = 'component_34269';
export function Component34269({ value = 34269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34269, 'data-value': derived.doubled }, children);
}
export default Component34269;
