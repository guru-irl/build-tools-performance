import React from 'react';
const LABEL_15894 = 'component_15894';
export function Component15894({ value = 15894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15894, 'data-value': derived.doubled }, children);
}
export default Component15894;
