import React from 'react';
const LABEL_37044 = 'component_37044';
export function Component37044({ value = 37044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37044, 'data-value': derived.doubled }, children);
}
export default Component37044;
