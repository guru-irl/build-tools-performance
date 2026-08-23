import React from 'react';
const LABEL_12569 = 'component_12569';
export function Component12569({ value = 12569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12569, 'data-value': derived.doubled }, children);
}
export default Component12569;
