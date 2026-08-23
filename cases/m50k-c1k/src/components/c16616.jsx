import React from 'react';
const LABEL_16616 = 'component_16616';
export function Component16616({ value = 16616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16616, 'data-value': derived.doubled }, children);
}
export default Component16616;
