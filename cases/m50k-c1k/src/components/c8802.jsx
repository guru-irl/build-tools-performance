import React from 'react';
const LABEL_8802 = 'component_8802';
export function Component8802({ value = 8802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8802, 'data-value': derived.doubled }, children);
}
export default Component8802;
