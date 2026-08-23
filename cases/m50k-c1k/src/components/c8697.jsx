import React from 'react';
const LABEL_8697 = 'component_8697';
export function Component8697({ value = 8697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8697, 'data-value': derived.doubled }, children);
}
export default Component8697;
