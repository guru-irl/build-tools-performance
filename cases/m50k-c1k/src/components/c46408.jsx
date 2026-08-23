import React from 'react';
const LABEL_46408 = 'component_46408';
export function Component46408({ value = 46408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46408, 'data-value': derived.doubled }, children);
}
export default Component46408;
