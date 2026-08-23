import React from 'react';
const LABEL_45011 = 'component_45011';
export function Component45011({ value = 45011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45011, 'data-value': derived.doubled }, children);
}
export default Component45011;
