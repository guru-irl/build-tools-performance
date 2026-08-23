import React from 'react';
const LABEL_38587 = 'component_38587';
export function Component38587({ value = 38587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38587, 'data-value': derived.doubled }, children);
}
export default Component38587;
