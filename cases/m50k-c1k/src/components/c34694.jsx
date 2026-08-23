import React from 'react';
const LABEL_34694 = 'component_34694';
export function Component34694({ value = 34694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34694, 'data-value': derived.doubled }, children);
}
export default Component34694;
