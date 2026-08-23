import React from 'react';
const LABEL_46224 = 'component_46224';
export function Component46224({ value = 46224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46224, 'data-value': derived.doubled }, children);
}
export default Component46224;
