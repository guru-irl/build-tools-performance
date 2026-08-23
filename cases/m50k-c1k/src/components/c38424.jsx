import React from 'react';
const LABEL_38424 = 'component_38424';
export function Component38424({ value = 38424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38424, 'data-value': derived.doubled }, children);
}
export default Component38424;
