import React from 'react';
const LABEL_4992 = 'component_4992';
export function Component4992({ value = 4992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4992, 'data-value': derived.doubled }, children);
}
export default Component4992;
