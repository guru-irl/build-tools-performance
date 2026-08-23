import React from 'react';
const LABEL_34463 = 'component_34463';
export function Component34463({ value = 34463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34463, 'data-value': derived.doubled }, children);
}
export default Component34463;
