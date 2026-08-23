import React from 'react';
const LABEL_40488 = 'component_40488';
export function Component40488({ value = 40488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40488, 'data-value': derived.doubled }, children);
}
export default Component40488;
