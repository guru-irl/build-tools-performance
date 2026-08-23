import React from 'react';
const LABEL_40503 = 'component_40503';
export function Component40503({ value = 40503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40503, 'data-value': derived.doubled }, children);
}
export default Component40503;
