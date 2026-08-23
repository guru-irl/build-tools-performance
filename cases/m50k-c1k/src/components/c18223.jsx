import React from 'react';
const LABEL_18223 = 'component_18223';
export function Component18223({ value = 18223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18223, 'data-value': derived.doubled }, children);
}
export default Component18223;
