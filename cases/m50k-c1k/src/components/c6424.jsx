import React from 'react';
const LABEL_6424 = 'component_6424';
export function Component6424({ value = 6424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6424, 'data-value': derived.doubled }, children);
}
export default Component6424;
