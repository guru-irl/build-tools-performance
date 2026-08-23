import React from 'react';
const LABEL_4545 = 'component_4545';
export function Component4545({ value = 4545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4545, 'data-value': derived.doubled }, children);
}
export default Component4545;
