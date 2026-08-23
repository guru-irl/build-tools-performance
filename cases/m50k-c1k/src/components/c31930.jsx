import React from 'react';
const LABEL_31930 = 'component_31930';
export function Component31930({ value = 31930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31930, 'data-value': derived.doubled }, children);
}
export default Component31930;
