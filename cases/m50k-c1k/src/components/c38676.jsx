import React from 'react';
const LABEL_38676 = 'component_38676';
export function Component38676({ value = 38676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38676, 'data-value': derived.doubled }, children);
}
export default Component38676;
