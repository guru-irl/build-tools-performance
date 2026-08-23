import React from 'react';
const LABEL_33223 = 'component_33223';
export function Component33223({ value = 33223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33223, 'data-value': derived.doubled }, children);
}
export default Component33223;
