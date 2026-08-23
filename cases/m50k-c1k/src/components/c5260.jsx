import React from 'react';
const LABEL_5260 = 'component_5260';
export function Component5260({ value = 5260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5260, 'data-value': derived.doubled }, children);
}
export default Component5260;
