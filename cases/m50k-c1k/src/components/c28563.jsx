import React from 'react';
const LABEL_28563 = 'component_28563';
export function Component28563({ value = 28563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28563, 'data-value': derived.doubled }, children);
}
export default Component28563;
