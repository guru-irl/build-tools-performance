import React from 'react';
const LABEL_19822 = 'component_19822';
export function Component19822({ value = 19822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19822, 'data-value': derived.doubled }, children);
}
export default Component19822;
