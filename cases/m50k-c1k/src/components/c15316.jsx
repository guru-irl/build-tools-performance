import React from 'react';
const LABEL_15316 = 'component_15316';
export function Component15316({ value = 15316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15316, 'data-value': derived.doubled }, children);
}
export default Component15316;
