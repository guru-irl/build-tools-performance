import React from 'react';
const LABEL_16867 = 'component_16867';
export function Component16867({ value = 16867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16867, 'data-value': derived.doubled }, children);
}
export default Component16867;
