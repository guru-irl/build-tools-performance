import React from 'react';
const LABEL_34842 = 'component_34842';
export function Component34842({ value = 34842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34842, 'data-value': derived.doubled }, children);
}
export default Component34842;
