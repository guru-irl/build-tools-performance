import React from 'react';
const LABEL_37224 = 'component_37224';
export function Component37224({ value = 37224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37224, 'data-value': derived.doubled }, children);
}
export default Component37224;
