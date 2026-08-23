import React from 'react';
const LABEL_19804 = 'component_19804';
export function Component19804({ value = 19804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19804, 'data-value': derived.doubled }, children);
}
export default Component19804;
