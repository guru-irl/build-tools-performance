import React from 'react';
const LABEL_400 = 'component_400';
export function Component400({ value = 400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_400, 'data-value': derived.doubled }, children);
}
export default Component400;
