import React from 'react';
const LABEL_38568 = 'component_38568';
export function Component38568({ value = 38568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38568, 'data-value': derived.doubled }, children);
}
export default Component38568;
