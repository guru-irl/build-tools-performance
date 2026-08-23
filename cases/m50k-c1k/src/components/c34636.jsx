import React from 'react';
const LABEL_34636 = 'component_34636';
export function Component34636({ value = 34636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34636, 'data-value': derived.doubled }, children);
}
export default Component34636;
