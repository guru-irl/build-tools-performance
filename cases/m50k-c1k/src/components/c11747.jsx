import React from 'react';
const LABEL_11747 = 'component_11747';
export function Component11747({ value = 11747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11747, 'data-value': derived.doubled }, children);
}
export default Component11747;
