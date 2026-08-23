import React from 'react';
const LABEL_3401 = 'component_3401';
export function Component3401({ value = 3401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3401, 'data-value': derived.doubled }, children);
}
export default Component3401;
