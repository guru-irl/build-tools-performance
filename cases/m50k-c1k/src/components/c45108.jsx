import React from 'react';
const LABEL_45108 = 'component_45108';
export function Component45108({ value = 45108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45108, 'data-value': derived.doubled }, children);
}
export default Component45108;
