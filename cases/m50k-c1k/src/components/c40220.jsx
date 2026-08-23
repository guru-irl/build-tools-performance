import React from 'react';
const LABEL_40220 = 'component_40220';
export function Component40220({ value = 40220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40220, 'data-value': derived.doubled }, children);
}
export default Component40220;
