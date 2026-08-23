import React from 'react';
const LABEL_21067 = 'component_21067';
export function Component21067({ value = 21067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21067, 'data-value': derived.doubled }, children);
}
export default Component21067;
