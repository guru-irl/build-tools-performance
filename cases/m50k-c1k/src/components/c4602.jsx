import React from 'react';
const LABEL_4602 = 'component_4602';
export function Component4602({ value = 4602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4602, 'data-value': derived.doubled }, children);
}
export default Component4602;
