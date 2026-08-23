import React from 'react';
const LABEL_42261 = 'component_42261';
export function Component42261({ value = 42261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42261, 'data-value': derived.doubled }, children);
}
export default Component42261;
