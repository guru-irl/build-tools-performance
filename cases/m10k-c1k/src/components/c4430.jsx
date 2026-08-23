import React from 'react';
const LABEL_4430 = 'component_4430';
export function Component4430({ value = 4430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4430, 'data-value': derived.doubled }, children);
}
export default Component4430;
