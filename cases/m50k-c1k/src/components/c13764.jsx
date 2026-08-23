import React from 'react';
const LABEL_13764 = 'component_13764';
export function Component13764({ value = 13764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13764, 'data-value': derived.doubled }, children);
}
export default Component13764;
