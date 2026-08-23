import React from 'react';
const LABEL_19651 = 'component_19651';
export function Component19651({ value = 19651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19651, 'data-value': derived.doubled }, children);
}
export default Component19651;
