import React from 'react';
const LABEL_4827 = 'component_4827';
export function Component4827({ value = 4827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4827, 'data-value': derived.doubled }, children);
}
export default Component4827;
