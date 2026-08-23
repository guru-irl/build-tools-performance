import React from 'react';
const LABEL_34764 = 'component_34764';
export function Component34764({ value = 34764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34764, 'data-value': derived.doubled }, children);
}
export default Component34764;
