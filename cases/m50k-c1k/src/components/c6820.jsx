import React from 'react';
const LABEL_6820 = 'component_6820';
export function Component6820({ value = 6820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6820, 'data-value': derived.doubled }, children);
}
export default Component6820;
