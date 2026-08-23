import React from 'react';
const LABEL_45688 = 'component_45688';
export function Component45688({ value = 45688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45688, 'data-value': derived.doubled }, children);
}
export default Component45688;
