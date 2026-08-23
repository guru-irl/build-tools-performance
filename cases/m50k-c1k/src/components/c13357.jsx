import React from 'react';
const LABEL_13357 = 'component_13357';
export function Component13357({ value = 13357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13357, 'data-value': derived.doubled }, children);
}
export default Component13357;
