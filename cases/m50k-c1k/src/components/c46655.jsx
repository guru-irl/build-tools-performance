import React from 'react';
const LABEL_46655 = 'component_46655';
export function Component46655({ value = 46655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46655, 'data-value': derived.doubled }, children);
}
export default Component46655;
