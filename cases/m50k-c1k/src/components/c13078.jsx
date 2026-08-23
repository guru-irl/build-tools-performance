import React from 'react';
const LABEL_13078 = 'component_13078';
export function Component13078({ value = 13078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13078, 'data-value': derived.doubled }, children);
}
export default Component13078;
