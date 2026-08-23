import React from 'react';
const LABEL_34071 = 'component_34071';
export function Component34071({ value = 34071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34071, 'data-value': derived.doubled }, children);
}
export default Component34071;
