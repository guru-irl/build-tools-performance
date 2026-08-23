import React from 'react';
const LABEL_34205 = 'component_34205';
export function Component34205({ value = 34205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34205, 'data-value': derived.doubled }, children);
}
export default Component34205;
