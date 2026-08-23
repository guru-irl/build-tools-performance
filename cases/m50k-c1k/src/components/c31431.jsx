import React from 'react';
const LABEL_31431 = 'component_31431';
export function Component31431({ value = 31431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31431, 'data-value': derived.doubled }, children);
}
export default Component31431;
