import React from 'react';
const LABEL_40586 = 'component_40586';
export function Component40586({ value = 40586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40586, 'data-value': derived.doubled }, children);
}
export default Component40586;
