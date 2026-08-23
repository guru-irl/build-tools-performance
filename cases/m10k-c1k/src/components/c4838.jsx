import React from 'react';
const LABEL_4838 = 'component_4838';
export function Component4838({ value = 4838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4838, 'data-value': derived.doubled }, children);
}
export default Component4838;
