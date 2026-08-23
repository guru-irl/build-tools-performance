import React from 'react';
const LABEL_40168 = 'component_40168';
export function Component40168({ value = 40168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40168, 'data-value': derived.doubled }, children);
}
export default Component40168;
