import React from 'react';
const LABEL_26240 = 'component_26240';
export function Component26240({ value = 26240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26240, 'data-value': derived.doubled }, children);
}
export default Component26240;
