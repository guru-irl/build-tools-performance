import React from 'react';
const LABEL_34139 = 'component_34139';
export function Component34139({ value = 34139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34139, 'data-value': derived.doubled }, children);
}
export default Component34139;
