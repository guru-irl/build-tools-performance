import React from 'react';
const LABEL_8747 = 'component_8747';
export function Component8747({ value = 8747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8747, 'data-value': derived.doubled }, children);
}
export default Component8747;
