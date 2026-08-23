import React from 'react';
const LABEL_5651 = 'component_5651';
export function Component5651({ value = 5651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5651, 'data-value': derived.doubled }, children);
}
export default Component5651;
