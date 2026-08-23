import React from 'react';
const LABEL_19472 = 'component_19472';
export function Component19472({ value = 19472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19472, 'data-value': derived.doubled }, children);
}
export default Component19472;
