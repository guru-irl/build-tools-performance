import React from 'react';
const LABEL_728 = 'component_728';
export function Component728({ value = 728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_728, 'data-value': derived.doubled }, children);
}
export default Component728;
