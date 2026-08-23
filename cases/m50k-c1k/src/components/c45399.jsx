import React from 'react';
const LABEL_45399 = 'component_45399';
export function Component45399({ value = 45399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45399, 'data-value': derived.doubled }, children);
}
export default Component45399;
