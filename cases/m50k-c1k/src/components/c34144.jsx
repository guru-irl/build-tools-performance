import React from 'react';
const LABEL_34144 = 'component_34144';
export function Component34144({ value = 34144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34144, 'data-value': derived.doubled }, children);
}
export default Component34144;
