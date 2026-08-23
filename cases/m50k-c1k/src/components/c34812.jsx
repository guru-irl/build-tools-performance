import React from 'react';
const LABEL_34812 = 'component_34812';
export function Component34812({ value = 34812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34812, 'data-value': derived.doubled }, children);
}
export default Component34812;
