import React from 'react';
const LABEL_5131 = 'component_5131';
export function Component5131({ value = 5131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5131, 'data-value': derived.doubled }, children);
}
export default Component5131;
