import React from 'react';
const LABEL_34964 = 'component_34964';
export function Component34964({ value = 34964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34964, 'data-value': derived.doubled }, children);
}
export default Component34964;
