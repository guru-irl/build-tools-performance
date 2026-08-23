import React from 'react';
const LABEL_26954 = 'component_26954';
export function Component26954({ value = 26954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26954, 'data-value': derived.doubled }, children);
}
export default Component26954;
