import React from 'react';
const LABEL_34568 = 'component_34568';
export function Component34568({ value = 34568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34568, 'data-value': derived.doubled }, children);
}
export default Component34568;
