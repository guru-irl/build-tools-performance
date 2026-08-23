import React from 'react';
const LABEL_45987 = 'component_45987';
export function Component45987({ value = 45987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45987, 'data-value': derived.doubled }, children);
}
export default Component45987;
