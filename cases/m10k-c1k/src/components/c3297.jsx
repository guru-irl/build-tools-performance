import React from 'react';
const LABEL_3297 = 'component_3297';
export function Component3297({ value = 3297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3297, 'data-value': derived.doubled }, children);
}
export default Component3297;
