import React from 'react';
const LABEL_6651 = 'component_6651';
export function Component6651({ value = 6651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6651, 'data-value': derived.doubled }, children);
}
export default Component6651;
