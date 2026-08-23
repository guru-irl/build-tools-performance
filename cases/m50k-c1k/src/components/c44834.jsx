import React from 'react';
const LABEL_44834 = 'component_44834';
export function Component44834({ value = 44834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44834, 'data-value': derived.doubled }, children);
}
export default Component44834;
