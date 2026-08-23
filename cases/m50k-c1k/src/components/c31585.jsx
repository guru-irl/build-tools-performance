import React from 'react';
const LABEL_31585 = 'component_31585';
export function Component31585({ value = 31585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31585, 'data-value': derived.doubled }, children);
}
export default Component31585;
