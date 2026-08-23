import React from 'react';
const LABEL_34517 = 'component_34517';
export function Component34517({ value = 34517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34517, 'data-value': derived.doubled }, children);
}
export default Component34517;
