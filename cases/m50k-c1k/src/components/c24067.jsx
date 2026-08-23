import React from 'react';
const LABEL_24067 = 'component_24067';
export function Component24067({ value = 24067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24067, 'data-value': derived.doubled }, children);
}
export default Component24067;
