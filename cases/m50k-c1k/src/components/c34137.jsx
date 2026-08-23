import React from 'react';
const LABEL_34137 = 'component_34137';
export function Component34137({ value = 34137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34137, 'data-value': derived.doubled }, children);
}
export default Component34137;
