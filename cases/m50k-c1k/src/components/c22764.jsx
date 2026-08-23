import React from 'react';
const LABEL_22764 = 'component_22764';
export function Component22764({ value = 22764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22764, 'data-value': derived.doubled }, children);
}
export default Component22764;
