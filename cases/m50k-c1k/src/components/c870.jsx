import React from 'react';
const LABEL_870 = 'component_870';
export function Component870({ value = 870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_870, 'data-value': derived.doubled }, children);
}
export default Component870;
