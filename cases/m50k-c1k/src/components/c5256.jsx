import React from 'react';
const LABEL_5256 = 'component_5256';
export function Component5256({ value = 5256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5256, 'data-value': derived.doubled }, children);
}
export default Component5256;
