import React from 'react';
const LABEL_18380 = 'component_18380';
export function Component18380({ value = 18380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18380, 'data-value': derived.doubled }, children);
}
export default Component18380;
