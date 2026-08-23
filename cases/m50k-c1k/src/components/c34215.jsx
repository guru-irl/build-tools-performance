import React from 'react';
const LABEL_34215 = 'component_34215';
export function Component34215({ value = 34215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34215, 'data-value': derived.doubled }, children);
}
export default Component34215;
