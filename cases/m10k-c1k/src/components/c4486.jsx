import React from 'react';
const LABEL_4486 = 'component_4486';
export function Component4486({ value = 4486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4486, 'data-value': derived.doubled }, children);
}
export default Component4486;
