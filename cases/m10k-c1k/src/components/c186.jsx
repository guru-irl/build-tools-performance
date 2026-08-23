import React from 'react';
const LABEL_186 = 'component_186';
export function Component186({ value = 186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_186, 'data-value': derived.doubled }, children);
}
export default Component186;
