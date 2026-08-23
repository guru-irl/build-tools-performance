import React from 'react';
const LABEL_4697 = 'component_4697';
export function Component4697({ value = 4697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4697, 'data-value': derived.doubled }, children);
}
export default Component4697;
