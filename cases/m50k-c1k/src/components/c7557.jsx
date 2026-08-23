import React from 'react';
const LABEL_7557 = 'component_7557';
export function Component7557({ value = 7557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7557, 'data-value': derived.doubled }, children);
}
export default Component7557;
