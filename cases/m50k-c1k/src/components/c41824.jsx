import React from 'react';
const LABEL_41824 = 'component_41824';
export function Component41824({ value = 41824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41824, 'data-value': derived.doubled }, children);
}
export default Component41824;
