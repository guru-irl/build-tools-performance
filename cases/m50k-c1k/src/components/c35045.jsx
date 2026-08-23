import React from 'react';
const LABEL_35045 = 'component_35045';
export function Component35045({ value = 35045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35045, 'data-value': derived.doubled }, children);
}
export default Component35045;
