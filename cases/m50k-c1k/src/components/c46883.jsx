import React from 'react';
const LABEL_46883 = 'component_46883';
export function Component46883({ value = 46883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46883, 'data-value': derived.doubled }, children);
}
export default Component46883;
