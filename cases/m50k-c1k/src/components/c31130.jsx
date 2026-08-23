import React from 'react';
const LABEL_31130 = 'component_31130';
export function Component31130({ value = 31130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31130, 'data-value': derived.doubled }, children);
}
export default Component31130;
