import React from 'react';
const LABEL_18108 = 'component_18108';
export function Component18108({ value = 18108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18108, 'data-value': derived.doubled }, children);
}
export default Component18108;
