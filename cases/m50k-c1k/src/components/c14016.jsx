import React from 'react';
const LABEL_14016 = 'component_14016';
export function Component14016({ value = 14016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14016, 'data-value': derived.doubled }, children);
}
export default Component14016;
