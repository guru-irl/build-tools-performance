import React from 'react';
const LABEL_34359 = 'component_34359';
export function Component34359({ value = 34359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34359, 'data-value': derived.doubled }, children);
}
export default Component34359;
