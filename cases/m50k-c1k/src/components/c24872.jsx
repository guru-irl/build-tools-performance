import React from 'react';
const LABEL_24872 = 'component_24872';
export function Component24872({ value = 24872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24872, 'data-value': derived.doubled }, children);
}
export default Component24872;
