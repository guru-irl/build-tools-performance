import React from 'react';
const LABEL_45875 = 'component_45875';
export function Component45875({ value = 45875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45875, 'data-value': derived.doubled }, children);
}
export default Component45875;
