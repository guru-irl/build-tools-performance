import React from 'react';
const LABEL_10016 = 'component_10016';
export function Component10016({ value = 10016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10016, 'data-value': derived.doubled }, children);
}
export default Component10016;
