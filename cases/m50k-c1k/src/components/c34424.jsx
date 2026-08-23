import React from 'react';
const LABEL_34424 = 'component_34424';
export function Component34424({ value = 34424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34424, 'data-value': derived.doubled }, children);
}
export default Component34424;
