import React from 'react';
const LABEL_33987 = 'component_33987';
export function Component33987({ value = 33987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33987, 'data-value': derived.doubled }, children);
}
export default Component33987;
