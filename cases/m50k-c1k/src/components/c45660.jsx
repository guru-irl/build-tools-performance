import React from 'react';
const LABEL_45660 = 'component_45660';
export function Component45660({ value = 45660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45660, 'data-value': derived.doubled }, children);
}
export default Component45660;
