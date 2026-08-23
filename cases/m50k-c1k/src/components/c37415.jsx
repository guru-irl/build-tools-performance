import React from 'react';
const LABEL_37415 = 'component_37415';
export function Component37415({ value = 37415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37415, 'data-value': derived.doubled }, children);
}
export default Component37415;
