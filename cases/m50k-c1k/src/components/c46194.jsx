import React from 'react';
const LABEL_46194 = 'component_46194';
export function Component46194({ value = 46194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46194, 'data-value': derived.doubled }, children);
}
export default Component46194;
