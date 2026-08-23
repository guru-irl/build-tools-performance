import React from 'react';
const LABEL_40999 = 'component_40999';
export function Component40999({ value = 40999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40999, 'data-value': derived.doubled }, children);
}
export default Component40999;
