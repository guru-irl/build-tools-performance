import React from 'react';
const LABEL_15067 = 'component_15067';
export function Component15067({ value = 15067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15067, 'data-value': derived.doubled }, children);
}
export default Component15067;
