import React from 'react';
const LABEL_37220 = 'component_37220';
export function Component37220({ value = 37220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37220, 'data-value': derived.doubled }, children);
}
export default Component37220;
