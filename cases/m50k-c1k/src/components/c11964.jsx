import React from 'react';
const LABEL_11964 = 'component_11964';
export function Component11964({ value = 11964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11964, 'data-value': derived.doubled }, children);
}
export default Component11964;
