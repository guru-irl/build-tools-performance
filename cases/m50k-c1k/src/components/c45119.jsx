import React from 'react';
const LABEL_45119 = 'component_45119';
export function Component45119({ value = 45119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45119, 'data-value': derived.doubled }, children);
}
export default Component45119;
