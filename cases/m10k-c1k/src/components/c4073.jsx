import React from 'react';
const LABEL_4073 = 'component_4073';
export function Component4073({ value = 4073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4073, 'data-value': derived.doubled }, children);
}
export default Component4073;
