import React from 'react';
const LABEL_11424 = 'component_11424';
export function Component11424({ value = 11424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11424, 'data-value': derived.doubled }, children);
}
export default Component11424;
