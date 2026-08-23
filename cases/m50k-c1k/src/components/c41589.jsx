import React from 'react';
const LABEL_41589 = 'component_41589';
export function Component41589({ value = 41589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41589, 'data-value': derived.doubled }, children);
}
export default Component41589;
