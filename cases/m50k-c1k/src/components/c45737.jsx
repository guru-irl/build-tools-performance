import React from 'react';
const LABEL_45737 = 'component_45737';
export function Component45737({ value = 45737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45737, 'data-value': derived.doubled }, children);
}
export default Component45737;
