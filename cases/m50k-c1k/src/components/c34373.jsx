import React from 'react';
const LABEL_34373 = 'component_34373';
export function Component34373({ value = 34373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34373, 'data-value': derived.doubled }, children);
}
export default Component34373;
