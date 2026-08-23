import React from 'react';
const LABEL_28430 = 'component_28430';
export function Component28430({ value = 28430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28430, 'data-value': derived.doubled }, children);
}
export default Component28430;
