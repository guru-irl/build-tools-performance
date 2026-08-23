import React from 'react';
const LABEL_13905 = 'component_13905';
export function Component13905({ value = 13905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13905, 'data-value': derived.doubled }, children);
}
export default Component13905;
