import React from 'react';
const LABEL_37582 = 'component_37582';
export function Component37582({ value = 37582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37582, 'data-value': derived.doubled }, children);
}
export default Component37582;
