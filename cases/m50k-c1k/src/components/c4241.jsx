import React from 'react';
const LABEL_4241 = 'component_4241';
export function Component4241({ value = 4241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4241, 'data-value': derived.doubled }, children);
}
export default Component4241;
