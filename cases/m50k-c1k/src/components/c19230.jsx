import React from 'react';
const LABEL_19230 = 'component_19230';
export function Component19230({ value = 19230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19230, 'data-value': derived.doubled }, children);
}
export default Component19230;
