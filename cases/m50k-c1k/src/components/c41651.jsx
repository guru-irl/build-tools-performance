import React from 'react';
const LABEL_41651 = 'component_41651';
export function Component41651({ value = 41651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41651, 'data-value': derived.doubled }, children);
}
export default Component41651;
