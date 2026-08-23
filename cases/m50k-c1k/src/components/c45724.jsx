import React from 'react';
const LABEL_45724 = 'component_45724';
export function Component45724({ value = 45724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45724, 'data-value': derived.doubled }, children);
}
export default Component45724;
