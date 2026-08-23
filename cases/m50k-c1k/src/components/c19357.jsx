import React from 'react';
const LABEL_19357 = 'component_19357';
export function Component19357({ value = 19357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19357, 'data-value': derived.doubled }, children);
}
export default Component19357;
