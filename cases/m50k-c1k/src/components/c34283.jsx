import React from 'react';
const LABEL_34283 = 'component_34283';
export function Component34283({ value = 34283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34283, 'data-value': derived.doubled }, children);
}
export default Component34283;
