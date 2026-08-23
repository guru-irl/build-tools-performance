import React from 'react';
const LABEL_40184 = 'component_40184';
export function Component40184({ value = 40184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40184, 'data-value': derived.doubled }, children);
}
export default Component40184;
