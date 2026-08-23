import React from 'react';
const LABEL_41962 = 'component_41962';
export function Component41962({ value = 41962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41962, 'data-value': derived.doubled }, children);
}
export default Component41962;
