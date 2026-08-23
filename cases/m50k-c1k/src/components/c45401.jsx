import React from 'react';
const LABEL_45401 = 'component_45401';
export function Component45401({ value = 45401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45401, 'data-value': derived.doubled }, children);
}
export default Component45401;
