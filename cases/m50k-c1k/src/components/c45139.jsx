import React from 'react';
const LABEL_45139 = 'component_45139';
export function Component45139({ value = 45139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45139, 'data-value': derived.doubled }, children);
}
export default Component45139;
