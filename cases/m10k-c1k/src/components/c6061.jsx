import React from 'react';
const LABEL_6061 = 'component_6061';
export function Component6061({ value = 6061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6061, 'data-value': derived.doubled }, children);
}
export default Component6061;
