import React from 'react';
const LABEL_26183 = 'component_26183';
export function Component26183({ value = 26183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26183, 'data-value': derived.doubled }, children);
}
export default Component26183;
