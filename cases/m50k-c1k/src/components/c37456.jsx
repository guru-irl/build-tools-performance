import React from 'react';
const LABEL_37456 = 'component_37456';
export function Component37456({ value = 37456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37456, 'data-value': derived.doubled }, children);
}
export default Component37456;
