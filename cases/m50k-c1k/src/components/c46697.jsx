import React from 'react';
const LABEL_46697 = 'component_46697';
export function Component46697({ value = 46697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46697, 'data-value': derived.doubled }, children);
}
export default Component46697;
