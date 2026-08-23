import React from 'react';
const LABEL_44728 = 'component_44728';
export function Component44728({ value = 44728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44728, 'data-value': derived.doubled }, children);
}
export default Component44728;
