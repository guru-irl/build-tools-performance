import React from 'react';
const LABEL_19186 = 'component_19186';
export function Component19186({ value = 19186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19186, 'data-value': derived.doubled }, children);
}
export default Component19186;
