import React from 'react';
const LABEL_38129 = 'component_38129';
export function Component38129({ value = 38129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38129, 'data-value': derived.doubled }, children);
}
export default Component38129;
