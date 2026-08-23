import React from 'react';
const LABEL_19184 = 'component_19184';
export function Component19184({ value = 19184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19184, 'data-value': derived.doubled }, children);
}
export default Component19184;
