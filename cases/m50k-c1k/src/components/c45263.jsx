import React from 'react';
const LABEL_45263 = 'component_45263';
export function Component45263({ value = 45263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45263, 'data-value': derived.doubled }, children);
}
export default Component45263;
