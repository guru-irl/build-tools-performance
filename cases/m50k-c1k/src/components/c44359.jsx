import React from 'react';
const LABEL_44359 = 'component_44359';
export function Component44359({ value = 44359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44359, 'data-value': derived.doubled }, children);
}
export default Component44359;
