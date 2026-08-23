import React from 'react';
const LABEL_25414 = 'component_25414';
export function Component25414({ value = 25414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25414, 'data-value': derived.doubled }, children);
}
export default Component25414;
