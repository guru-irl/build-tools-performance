import React from 'react';
const LABEL_24265 = 'component_24265';
export function Component24265({ value = 24265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24265, 'data-value': derived.doubled }, children);
}
export default Component24265;
