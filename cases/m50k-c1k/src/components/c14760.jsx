import React from 'react';
const LABEL_14760 = 'component_14760';
export function Component14760({ value = 14760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14760, 'data-value': derived.doubled }, children);
}
export default Component14760;
