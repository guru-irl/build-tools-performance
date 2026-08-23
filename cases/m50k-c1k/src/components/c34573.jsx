import React from 'react';
const LABEL_34573 = 'component_34573';
export function Component34573({ value = 34573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34573, 'data-value': derived.doubled }, children);
}
export default Component34573;
