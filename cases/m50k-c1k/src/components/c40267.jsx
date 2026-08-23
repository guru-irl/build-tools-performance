import React from 'react';
const LABEL_40267 = 'component_40267';
export function Component40267({ value = 40267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40267, 'data-value': derived.doubled }, children);
}
export default Component40267;
