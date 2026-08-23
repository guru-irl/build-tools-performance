import React from 'react';
const LABEL_3259 = 'component_3259';
export function Component3259({ value = 3259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3259, 'data-value': derived.doubled }, children);
}
export default Component3259;
