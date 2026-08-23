import React from 'react';
const LABEL_19979 = 'component_19979';
export function Component19979({ value = 19979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19979, 'data-value': derived.doubled }, children);
}
export default Component19979;
