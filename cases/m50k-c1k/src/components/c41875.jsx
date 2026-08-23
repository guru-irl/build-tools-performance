import React from 'react';
const LABEL_41875 = 'component_41875';
export function Component41875({ value = 41875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41875, 'data-value': derived.doubled }, children);
}
export default Component41875;
