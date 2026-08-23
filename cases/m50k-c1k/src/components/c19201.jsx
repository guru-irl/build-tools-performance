import React from 'react';
const LABEL_19201 = 'component_19201';
export function Component19201({ value = 19201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19201, 'data-value': derived.doubled }, children);
}
export default Component19201;
