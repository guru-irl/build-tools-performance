import React from 'react';
const LABEL_40466 = 'component_40466';
export function Component40466({ value = 40466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40466, 'data-value': derived.doubled }, children);
}
export default Component40466;
