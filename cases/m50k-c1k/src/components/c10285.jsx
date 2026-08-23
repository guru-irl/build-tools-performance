import React from 'react';
const LABEL_10285 = 'component_10285';
export function Component10285({ value = 10285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10285, 'data-value': derived.doubled }, children);
}
export default Component10285;
