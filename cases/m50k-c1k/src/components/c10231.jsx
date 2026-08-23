import React from 'react';
const LABEL_10231 = 'component_10231';
export function Component10231({ value = 10231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10231, 'data-value': derived.doubled }, children);
}
export default Component10231;
