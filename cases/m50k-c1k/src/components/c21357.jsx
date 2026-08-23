import React from 'react';
const LABEL_21357 = 'component_21357';
export function Component21357({ value = 21357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21357, 'data-value': derived.doubled }, children);
}
export default Component21357;
