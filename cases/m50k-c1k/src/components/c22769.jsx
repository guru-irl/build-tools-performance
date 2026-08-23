import React from 'react';
const LABEL_22769 = 'component_22769';
export function Component22769({ value = 22769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22769, 'data-value': derived.doubled }, children);
}
export default Component22769;
