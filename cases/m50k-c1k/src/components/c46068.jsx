import React from 'react';
const LABEL_46068 = 'component_46068';
export function Component46068({ value = 46068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46068, 'data-value': derived.doubled }, children);
}
export default Component46068;
