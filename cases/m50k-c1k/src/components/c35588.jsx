import React from 'react';
const LABEL_35588 = 'component_35588';
export function Component35588({ value = 35588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35588, 'data-value': derived.doubled }, children);
}
export default Component35588;
