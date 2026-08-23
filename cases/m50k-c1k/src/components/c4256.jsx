import React from 'react';
const LABEL_4256 = 'component_4256';
export function Component4256({ value = 4256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4256, 'data-value': derived.doubled }, children);
}
export default Component4256;
