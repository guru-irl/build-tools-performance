import React from 'react';
const LABEL_24603 = 'component_24603';
export function Component24603({ value = 24603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24603, 'data-value': derived.doubled }, children);
}
export default Component24603;
