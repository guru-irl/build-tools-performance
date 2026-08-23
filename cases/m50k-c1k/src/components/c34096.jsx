import React from 'react';
const LABEL_34096 = 'component_34096';
export function Component34096({ value = 34096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34096, 'data-value': derived.doubled }, children);
}
export default Component34096;
