import React from 'react';
const LABEL_40431 = 'component_40431';
export function Component40431({ value = 40431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40431, 'data-value': derived.doubled }, children);
}
export default Component40431;
