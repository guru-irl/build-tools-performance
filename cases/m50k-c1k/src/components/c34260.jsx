import React from 'react';
const LABEL_34260 = 'component_34260';
export function Component34260({ value = 34260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34260, 'data-value': derived.doubled }, children);
}
export default Component34260;
