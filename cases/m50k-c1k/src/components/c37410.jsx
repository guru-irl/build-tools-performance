import React from 'react';
const LABEL_37410 = 'component_37410';
export function Component37410({ value = 37410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37410, 'data-value': derived.doubled }, children);
}
export default Component37410;
