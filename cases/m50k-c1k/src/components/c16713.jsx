import React from 'react';
const LABEL_16713 = 'component_16713';
export function Component16713({ value = 16713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16713, 'data-value': derived.doubled }, children);
}
export default Component16713;
