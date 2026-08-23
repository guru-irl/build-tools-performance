import React from 'react';
const LABEL_12673 = 'component_12673';
export function Component12673({ value = 12673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12673, 'data-value': derived.doubled }, children);
}
export default Component12673;
