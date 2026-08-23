import React from 'react';
const LABEL_33120 = 'component_33120';
export function Component33120({ value = 33120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33120, 'data-value': derived.doubled }, children);
}
export default Component33120;
