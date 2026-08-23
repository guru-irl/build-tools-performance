import React from 'react';
const LABEL_18071 = 'component_18071';
export function Component18071({ value = 18071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18071, 'data-value': derived.doubled }, children);
}
export default Component18071;
