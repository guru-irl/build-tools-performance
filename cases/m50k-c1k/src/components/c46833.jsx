import React from 'react';
const LABEL_46833 = 'component_46833';
export function Component46833({ value = 46833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46833, 'data-value': derived.doubled }, children);
}
export default Component46833;
