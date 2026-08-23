import React from 'react';
const LABEL_5518 = 'component_5518';
export function Component5518({ value = 5518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5518, 'data-value': derived.doubled }, children);
}
export default Component5518;
