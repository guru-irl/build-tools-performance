import React from 'react';
const LABEL_34576 = 'component_34576';
export function Component34576({ value = 34576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34576, 'data-value': derived.doubled }, children);
}
export default Component34576;
