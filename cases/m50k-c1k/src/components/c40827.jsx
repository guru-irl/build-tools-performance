import React from 'react';
const LABEL_40827 = 'component_40827';
export function Component40827({ value = 40827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40827, 'data-value': derived.doubled }, children);
}
export default Component40827;
