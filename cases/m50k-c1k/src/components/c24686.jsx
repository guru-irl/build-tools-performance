import React from 'react';
const LABEL_24686 = 'component_24686';
export function Component24686({ value = 24686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24686, 'data-value': derived.doubled }, children);
}
export default Component24686;
