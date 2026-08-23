import React from 'react';
const LABEL_36068 = 'component_36068';
export function Component36068({ value = 36068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36068, 'data-value': derived.doubled }, children);
}
export default Component36068;
