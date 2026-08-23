import React from 'react';
const LABEL_24689 = 'component_24689';
export function Component24689({ value = 24689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24689, 'data-value': derived.doubled }, children);
}
export default Component24689;
