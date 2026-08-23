import React from 'react';
const LABEL_44798 = 'component_44798';
export function Component44798({ value = 44798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44798, 'data-value': derived.doubled }, children);
}
export default Component44798;
