import React from 'react';
const LABEL_40992 = 'component_40992';
export function Component40992({ value = 40992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40992, 'data-value': derived.doubled }, children);
}
export default Component40992;
