import React from 'react';
const LABEL_31223 = 'component_31223';
export function Component31223({ value = 31223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31223, 'data-value': derived.doubled }, children);
}
export default Component31223;
