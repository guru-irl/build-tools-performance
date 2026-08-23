import React from 'react';
const LABEL_40073 = 'component_40073';
export function Component40073({ value = 40073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40073, 'data-value': derived.doubled }, children);
}
export default Component40073;
