import React from 'react';
const LABEL_28748 = 'component_28748';
export function Component28748({ value = 28748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28748, 'data-value': derived.doubled }, children);
}
export default Component28748;
