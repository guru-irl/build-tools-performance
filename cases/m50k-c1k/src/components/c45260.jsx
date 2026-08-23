import React from 'react';
const LABEL_45260 = 'component_45260';
export function Component45260({ value = 45260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45260, 'data-value': derived.doubled }, children);
}
export default Component45260;
