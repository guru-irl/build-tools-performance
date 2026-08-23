import React from 'react';
const LABEL_19223 = 'component_19223';
export function Component19223({ value = 19223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19223, 'data-value': derived.doubled }, children);
}
export default Component19223;
