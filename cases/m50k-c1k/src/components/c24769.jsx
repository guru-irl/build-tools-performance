import React from 'react';
const LABEL_24769 = 'component_24769';
export function Component24769({ value = 24769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24769, 'data-value': derived.doubled }, children);
}
export default Component24769;
