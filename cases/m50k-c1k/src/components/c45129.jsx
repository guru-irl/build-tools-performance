import React from 'react';
const LABEL_45129 = 'component_45129';
export function Component45129({ value = 45129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45129, 'data-value': derived.doubled }, children);
}
export default Component45129;
