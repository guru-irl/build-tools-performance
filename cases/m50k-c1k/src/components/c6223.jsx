import React from 'react';
const LABEL_6223 = 'component_6223';
export function Component6223({ value = 6223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6223, 'data-value': derived.doubled }, children);
}
export default Component6223;
