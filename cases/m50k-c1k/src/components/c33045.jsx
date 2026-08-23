import React from 'react';
const LABEL_33045 = 'component_33045';
export function Component33045({ value = 33045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33045, 'data-value': derived.doubled }, children);
}
export default Component33045;
