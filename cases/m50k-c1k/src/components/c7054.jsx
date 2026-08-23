import React from 'react';
const LABEL_7054 = 'component_7054';
export function Component7054({ value = 7054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7054, 'data-value': derived.doubled }, children);
}
export default Component7054;
