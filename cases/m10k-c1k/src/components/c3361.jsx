import React from 'react';
const LABEL_3361 = 'component_3361';
export function Component3361({ value = 3361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3361, 'data-value': derived.doubled }, children);
}
export default Component3361;
