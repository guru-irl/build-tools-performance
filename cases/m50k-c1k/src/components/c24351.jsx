import React from 'react';
const LABEL_24351 = 'component_24351';
export function Component24351({ value = 24351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24351, 'data-value': derived.doubled }, children);
}
export default Component24351;
