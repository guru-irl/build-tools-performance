import React from 'react';
const LABEL_34214 = 'component_34214';
export function Component34214({ value = 34214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34214, 'data-value': derived.doubled }, children);
}
export default Component34214;
