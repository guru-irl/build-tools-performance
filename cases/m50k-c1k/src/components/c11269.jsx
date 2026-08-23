import React from 'react';
const LABEL_11269 = 'component_11269';
export function Component11269({ value = 11269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11269, 'data-value': derived.doubled }, children);
}
export default Component11269;
