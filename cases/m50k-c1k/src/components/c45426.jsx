import React from 'react';
const LABEL_45426 = 'component_45426';
export function Component45426({ value = 45426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45426, 'data-value': derived.doubled }, children);
}
export default Component45426;
