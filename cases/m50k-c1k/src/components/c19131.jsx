import React from 'react';
const LABEL_19131 = 'component_19131';
export function Component19131({ value = 19131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19131, 'data-value': derived.doubled }, children);
}
export default Component19131;
