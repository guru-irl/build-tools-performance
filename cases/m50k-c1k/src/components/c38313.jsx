import React from 'react';
const LABEL_38313 = 'component_38313';
export function Component38313({ value = 38313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38313, 'data-value': derived.doubled }, children);
}
export default Component38313;
