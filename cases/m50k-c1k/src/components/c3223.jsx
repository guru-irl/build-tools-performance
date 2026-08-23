import React from 'react';
const LABEL_3223 = 'component_3223';
export function Component3223({ value = 3223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3223, 'data-value': derived.doubled }, children);
}
export default Component3223;
