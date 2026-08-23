import React from 'react';
const LABEL_40976 = 'component_40976';
export function Component40976({ value = 40976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40976, 'data-value': derived.doubled }, children);
}
export default Component40976;
