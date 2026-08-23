import React from 'react';
const LABEL_5413 = 'component_5413';
export function Component5413({ value = 5413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5413, 'data-value': derived.doubled }, children);
}
export default Component5413;
