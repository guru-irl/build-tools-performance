import React from 'react';
const LABEL_6224 = 'component_6224';
export function Component6224({ value = 6224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6224, 'data-value': derived.doubled }, children);
}
export default Component6224;
