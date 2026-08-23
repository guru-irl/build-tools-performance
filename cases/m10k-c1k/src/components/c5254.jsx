import React from 'react';
const LABEL_5254 = 'component_5254';
export function Component5254({ value = 5254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5254, 'data-value': derived.doubled }, children);
}
export default Component5254;
