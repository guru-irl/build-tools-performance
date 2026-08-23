import React from 'react';
const LABEL_6388 = 'component_6388';
export function Component6388({ value = 6388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6388, 'data-value': derived.doubled }, children);
}
export default Component6388;
