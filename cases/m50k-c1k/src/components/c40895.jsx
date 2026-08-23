import React from 'react';
const LABEL_40895 = 'component_40895';
export function Component40895({ value = 40895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40895, 'data-value': derived.doubled }, children);
}
export default Component40895;
