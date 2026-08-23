import React from 'react';
const LABEL_45020 = 'component_45020';
export function Component45020({ value = 45020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45020, 'data-value': derived.doubled }, children);
}
export default Component45020;
