import React from 'react';
const LABEL_41503 = 'component_41503';
export function Component41503({ value = 41503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41503, 'data-value': derived.doubled }, children);
}
export default Component41503;
