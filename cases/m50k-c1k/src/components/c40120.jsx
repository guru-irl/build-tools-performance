import React from 'react';
const LABEL_40120 = 'component_40120';
export function Component40120({ value = 40120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40120, 'data-value': derived.doubled }, children);
}
export default Component40120;
