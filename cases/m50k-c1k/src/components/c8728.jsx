import React from 'react';
const LABEL_8728 = 'component_8728';
export function Component8728({ value = 8728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8728, 'data-value': derived.doubled }, children);
}
export default Component8728;
