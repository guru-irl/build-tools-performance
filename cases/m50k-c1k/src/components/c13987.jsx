import React from 'react';
const LABEL_13987 = 'component_13987';
export function Component13987({ value = 13987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13987, 'data-value': derived.doubled }, children);
}
export default Component13987;
