import React from 'react';
const LABEL_34190 = 'component_34190';
export function Component34190({ value = 34190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34190, 'data-value': derived.doubled }, children);
}
export default Component34190;
