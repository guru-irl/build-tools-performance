import React from 'react';
const LABEL_46357 = 'component_46357';
export function Component46357({ value = 46357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46357, 'data-value': derived.doubled }, children);
}
export default Component46357;
