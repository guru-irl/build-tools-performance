import React from 'react';
const LABEL_31313 = 'component_31313';
export function Component31313({ value = 31313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31313, 'data-value': derived.doubled }, children);
}
export default Component31313;
