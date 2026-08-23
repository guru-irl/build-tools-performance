import React from 'react';
const LABEL_38713 = 'component_38713';
export function Component38713({ value = 38713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38713, 'data-value': derived.doubled }, children);
}
export default Component38713;
