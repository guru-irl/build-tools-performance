import React from 'react';
const LABEL_34173 = 'component_34173';
export function Component34173({ value = 34173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34173, 'data-value': derived.doubled }, children);
}
export default Component34173;
