import React from 'react';
const LABEL_4261 = 'component_4261';
export function Component4261({ value = 4261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4261, 'data-value': derived.doubled }, children);
}
export default Component4261;
