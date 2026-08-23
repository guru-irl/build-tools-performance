import React from 'react';
const LABEL_34223 = 'component_34223';
export function Component34223({ value = 34223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34223, 'data-value': derived.doubled }, children);
}
export default Component34223;
