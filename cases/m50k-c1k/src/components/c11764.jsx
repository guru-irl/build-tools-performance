import React from 'react';
const LABEL_11764 = 'component_11764';
export function Component11764({ value = 11764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11764, 'data-value': derived.doubled }, children);
}
export default Component11764;
