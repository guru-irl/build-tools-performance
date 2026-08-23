import React from 'react';
const LABEL_25223 = 'component_25223';
export function Component25223({ value = 25223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25223, 'data-value': derived.doubled }, children);
}
export default Component25223;
