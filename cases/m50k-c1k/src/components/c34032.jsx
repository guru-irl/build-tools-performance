import React from 'react';
const LABEL_34032 = 'component_34032';
export function Component34032({ value = 34032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34032, 'data-value': derived.doubled }, children);
}
export default Component34032;
