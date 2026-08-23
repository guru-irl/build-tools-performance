import React from 'react';
const LABEL_41663 = 'component_41663';
export function Component41663({ value = 41663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41663, 'data-value': derived.doubled }, children);
}
export default Component41663;
