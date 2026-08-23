import React from 'react';
const LABEL_34570 = 'component_34570';
export function Component34570({ value = 34570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34570, 'data-value': derived.doubled }, children);
}
export default Component34570;
