import React from 'react';
const LABEL_46434 = 'component_46434';
export function Component46434({ value = 46434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46434, 'data-value': derived.doubled }, children);
}
export default Component46434;
