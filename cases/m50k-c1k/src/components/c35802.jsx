import React from 'react';
const LABEL_35802 = 'component_35802';
export function Component35802({ value = 35802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35802, 'data-value': derived.doubled }, children);
}
export default Component35802;
