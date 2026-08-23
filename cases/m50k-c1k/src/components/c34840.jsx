import React from 'react';
const LABEL_34840 = 'component_34840';
export function Component34840({ value = 34840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34840, 'data-value': derived.doubled }, children);
}
export default Component34840;
