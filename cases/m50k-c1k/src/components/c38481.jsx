import React from 'react';
const LABEL_38481 = 'component_38481';
export function Component38481({ value = 38481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38481, 'data-value': derived.doubled }, children);
}
export default Component38481;
