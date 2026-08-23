import React from 'react';
const LABEL_45747 = 'component_45747';
export function Component45747({ value = 45747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45747, 'data-value': derived.doubled }, children);
}
export default Component45747;
