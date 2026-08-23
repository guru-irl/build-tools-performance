import React from 'react';
const LABEL_4964 = 'component_4964';
export function Component4964({ value = 4964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4964, 'data-value': derived.doubled }, children);
}
export default Component4964;
