import React from 'react';
const LABEL_40285 = 'component_40285';
export function Component40285({ value = 40285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40285, 'data-value': derived.doubled }, children);
}
export default Component40285;
