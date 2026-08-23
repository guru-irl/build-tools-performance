import React from 'react';
const LABEL_34230 = 'component_34230';
export function Component34230({ value = 34230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34230, 'data-value': derived.doubled }, children);
}
export default Component34230;
