import React from 'react';
const LABEL_42499 = 'component_42499';
export function Component42499({ value = 42499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42499, 'data-value': derived.doubled }, children);
}
export default Component42499;
