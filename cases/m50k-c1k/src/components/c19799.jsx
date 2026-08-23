import React from 'react';
const LABEL_19799 = 'component_19799';
export function Component19799({ value = 19799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19799, 'data-value': derived.doubled }, children);
}
export default Component19799;
