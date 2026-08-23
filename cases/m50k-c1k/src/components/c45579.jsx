import React from 'react';
const LABEL_45579 = 'component_45579';
export function Component45579({ value = 45579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45579, 'data-value': derived.doubled }, children);
}
export default Component45579;
