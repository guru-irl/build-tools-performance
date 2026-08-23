import React from 'react';
const LABEL_804 = 'component_804';
export function Component804({ value = 804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_804, 'data-value': derived.doubled }, children);
}
export default Component804;
