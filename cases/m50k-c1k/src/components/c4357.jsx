import React from 'react';
const LABEL_4357 = 'component_4357';
export function Component4357({ value = 4357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4357, 'data-value': derived.doubled }, children);
}
export default Component4357;
