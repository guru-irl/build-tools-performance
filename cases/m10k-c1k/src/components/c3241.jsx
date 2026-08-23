import React from 'react';
const LABEL_3241 = 'component_3241';
export function Component3241({ value = 3241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3241, 'data-value': derived.doubled }, children);
}
export default Component3241;
