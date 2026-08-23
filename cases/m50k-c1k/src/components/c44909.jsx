import React from 'react';
const LABEL_44909 = 'component_44909';
export function Component44909({ value = 44909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44909, 'data-value': derived.doubled }, children);
}
export default Component44909;
