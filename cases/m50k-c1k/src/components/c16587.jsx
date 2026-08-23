import React from 'react';
const LABEL_16587 = 'component_16587';
export function Component16587({ value = 16587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16587, 'data-value': derived.doubled }, children);
}
export default Component16587;
