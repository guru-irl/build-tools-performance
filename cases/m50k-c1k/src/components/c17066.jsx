import React from 'react';
const LABEL_17066 = 'component_17066';
export function Component17066({ value = 17066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17066, 'data-value': derived.doubled }, children);
}
export default Component17066;
