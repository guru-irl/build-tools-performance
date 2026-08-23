import React from 'react';
const LABEL_19020 = 'component_19020';
export function Component19020({ value = 19020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19020, 'data-value': derived.doubled }, children);
}
export default Component19020;
