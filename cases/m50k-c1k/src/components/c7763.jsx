import React from 'react';
const LABEL_7763 = 'component_7763';
export function Component7763({ value = 7763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7763, 'data-value': derived.doubled }, children);
}
export default Component7763;
