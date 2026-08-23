import React from 'react';
const LABEL_40061 = 'component_40061';
export function Component40061({ value = 40061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40061, 'data-value': derived.doubled }, children);
}
export default Component40061;
