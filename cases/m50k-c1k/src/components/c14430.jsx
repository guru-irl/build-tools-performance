import React from 'react';
const LABEL_14430 = 'component_14430';
export function Component14430({ value = 14430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14430, 'data-value': derived.doubled }, children);
}
export default Component14430;
