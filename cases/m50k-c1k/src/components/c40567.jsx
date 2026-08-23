import React from 'react';
const LABEL_40567 = 'component_40567';
export function Component40567({ value = 40567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40567, 'data-value': derived.doubled }, children);
}
export default Component40567;
