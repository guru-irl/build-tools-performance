import React from 'react';
const LABEL_46820 = 'component_46820';
export function Component46820({ value = 46820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46820, 'data-value': derived.doubled }, children);
}
export default Component46820;
