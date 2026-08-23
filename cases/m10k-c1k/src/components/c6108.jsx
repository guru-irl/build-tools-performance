import React from 'react';
const LABEL_6108 = 'component_6108';
export function Component6108({ value = 6108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6108, 'data-value': derived.doubled }, children);
}
export default Component6108;
