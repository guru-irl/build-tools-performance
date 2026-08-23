import React from 'react';
const LABEL_5917 = 'component_5917';
export function Component5917({ value = 5917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5917, 'data-value': derived.doubled }, children);
}
export default Component5917;
