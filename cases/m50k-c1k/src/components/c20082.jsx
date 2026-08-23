import React from 'react';
const LABEL_20082 = 'component_20082';
export function Component20082({ value = 20082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20082, 'data-value': derived.doubled }, children);
}
export default Component20082;
