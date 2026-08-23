import React from 'react';
const LABEL_11261 = 'component_11261';
export function Component11261({ value = 11261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11261, 'data-value': derived.doubled }, children);
}
export default Component11261;
