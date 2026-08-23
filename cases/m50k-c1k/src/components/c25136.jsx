import React from 'react';
const LABEL_25136 = 'component_25136';
export function Component25136({ value = 25136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25136, 'data-value': derived.doubled }, children);
}
export default Component25136;
