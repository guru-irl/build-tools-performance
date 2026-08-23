import React from 'react';
const LABEL_4764 = 'component_4764';
export function Component4764({ value = 4764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4764, 'data-value': derived.doubled }, children);
}
export default Component4764;
