import React from 'react';
const LABEL_41979 = 'component_41979';
export function Component41979({ value = 41979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41979, 'data-value': derived.doubled }, children);
}
export default Component41979;
