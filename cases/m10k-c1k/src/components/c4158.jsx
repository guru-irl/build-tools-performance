import React from 'react';
const LABEL_4158 = 'component_4158';
export function Component4158({ value = 4158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4158, 'data-value': derived.doubled }, children);
}
export default Component4158;
