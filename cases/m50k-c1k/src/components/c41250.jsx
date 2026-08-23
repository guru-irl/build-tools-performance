import React from 'react';
const LABEL_41250 = 'component_41250';
export function Component41250({ value = 41250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41250, 'data-value': derived.doubled }, children);
}
export default Component41250;
