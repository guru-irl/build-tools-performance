import React from 'react';
const LABEL_37016 = 'component_37016';
export function Component37016({ value = 37016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37016, 'data-value': derived.doubled }, children);
}
export default Component37016;
