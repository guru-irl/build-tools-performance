import React from 'react';
const LABEL_26126 = 'component_26126';
export function Component26126({ value = 26126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26126, 'data-value': derived.doubled }, children);
}
export default Component26126;
