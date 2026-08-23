import React from 'react';
const LABEL_7651 = 'component_7651';
export function Component7651({ value = 7651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7651, 'data-value': derived.doubled }, children);
}
export default Component7651;
