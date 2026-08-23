import React from 'react';
const LABEL_8066 = 'component_8066';
export function Component8066({ value = 8066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8066, 'data-value': derived.doubled }, children);
}
export default Component8066;
