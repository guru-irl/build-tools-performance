import React from 'react';
const LABEL_40054 = 'component_40054';
export function Component40054({ value = 40054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40054, 'data-value': derived.doubled }, children);
}
export default Component40054;
