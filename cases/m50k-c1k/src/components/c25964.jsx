import React from 'react';
const LABEL_25964 = 'component_25964';
export function Component25964({ value = 25964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25964, 'data-value': derived.doubled }, children);
}
export default Component25964;
