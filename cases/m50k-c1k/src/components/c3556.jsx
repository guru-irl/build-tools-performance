import React from 'react';
const LABEL_3556 = 'component_3556';
export function Component3556({ value = 3556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3556, 'data-value': derived.doubled }, children);
}
export default Component3556;
