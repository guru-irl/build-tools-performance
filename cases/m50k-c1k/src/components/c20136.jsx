import React from 'react';
const LABEL_20136 = 'component_20136';
export function Component20136({ value = 20136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20136, 'data-value': derived.doubled }, children);
}
export default Component20136;
