import React from 'react';
const LABEL_18748 = 'component_18748';
export function Component18748({ value = 18748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18748, 'data-value': derived.doubled }, children);
}
export default Component18748;
