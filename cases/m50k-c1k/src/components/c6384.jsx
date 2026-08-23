import React from 'react';
const LABEL_6384 = 'component_6384';
export function Component6384({ value = 6384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6384, 'data-value': derived.doubled }, children);
}
export default Component6384;
