import React from 'react';
const LABEL_41739 = 'component_41739';
export function Component41739({ value = 41739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41739, 'data-value': derived.doubled }, children);
}
export default Component41739;
