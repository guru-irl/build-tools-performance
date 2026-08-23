import React from 'react';
const LABEL_18708 = 'component_18708';
export function Component18708({ value = 18708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18708, 'data-value': derived.doubled }, children);
}
export default Component18708;
