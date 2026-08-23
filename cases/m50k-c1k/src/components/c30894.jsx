import React from 'react';
const LABEL_30894 = 'component_30894';
export function Component30894({ value = 30894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30894, 'data-value': derived.doubled }, children);
}
export default Component30894;
