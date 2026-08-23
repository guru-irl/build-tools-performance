import React from 'react';
const LABEL_45080 = 'component_45080';
export function Component45080({ value = 45080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45080, 'data-value': derived.doubled }, children);
}
export default Component45080;
