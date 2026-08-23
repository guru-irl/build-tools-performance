import React from 'react';
const LABEL_34186 = 'component_34186';
export function Component34186({ value = 34186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34186, 'data-value': derived.doubled }, children);
}
export default Component34186;
