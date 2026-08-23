import React from 'react';
const LABEL_31849 = 'component_31849';
export function Component31849({ value = 31849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31849, 'data-value': derived.doubled }, children);
}
export default Component31849;
