import React from 'react';
const LABEL_25725 = 'component_25725';
export function Component25725({ value = 25725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25725, 'data-value': derived.doubled }, children);
}
export default Component25725;
