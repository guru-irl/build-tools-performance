import React from 'react';
const LABEL_45451 = 'component_45451';
export function Component45451({ value = 45451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45451, 'data-value': derived.doubled }, children);
}
export default Component45451;
