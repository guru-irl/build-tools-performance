import React from 'react';
const LABEL_38930 = 'component_38930';
export function Component38930({ value = 38930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38930, 'data-value': derived.doubled }, children);
}
export default Component38930;
