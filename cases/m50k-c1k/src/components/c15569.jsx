import React from 'react';
const LABEL_15569 = 'component_15569';
export function Component15569({ value = 15569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15569, 'data-value': derived.doubled }, children);
}
export default Component15569;
