import React from 'react';
const LABEL_40261 = 'component_40261';
export function Component40261({ value = 40261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40261, 'data-value': derived.doubled }, children);
}
export default Component40261;
