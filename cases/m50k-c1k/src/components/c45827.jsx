import React from 'react';
const LABEL_45827 = 'component_45827';
export function Component45827({ value = 45827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45827, 'data-value': derived.doubled }, children);
}
export default Component45827;
