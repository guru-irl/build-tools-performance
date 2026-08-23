import React from 'react';
const LABEL_40053 = 'component_40053';
export function Component40053({ value = 40053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40053, 'data-value': derived.doubled }, children);
}
export default Component40053;
