import React from 'react';
const LABEL_24238 = 'component_24238';
export function Component24238({ value = 24238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24238, 'data-value': derived.doubled }, children);
}
export default Component24238;
