import React from 'react';
const LABEL_8158 = 'component_8158';
export function Component8158({ value = 8158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8158, 'data-value': derived.doubled }, children);
}
export default Component8158;
