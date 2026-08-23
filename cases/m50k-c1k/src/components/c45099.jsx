import React from 'react';
const LABEL_45099 = 'component_45099';
export function Component45099({ value = 45099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45099, 'data-value': derived.doubled }, children);
}
export default Component45099;
