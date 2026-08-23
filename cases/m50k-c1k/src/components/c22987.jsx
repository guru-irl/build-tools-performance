import React from 'react';
const LABEL_22987 = 'component_22987';
export function Component22987({ value = 22987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22987, 'data-value': derived.doubled }, children);
}
export default Component22987;
