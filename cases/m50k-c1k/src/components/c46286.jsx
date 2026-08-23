import React from 'react';
const LABEL_46286 = 'component_46286';
export function Component46286({ value = 46286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46286, 'data-value': derived.doubled }, children);
}
export default Component46286;
