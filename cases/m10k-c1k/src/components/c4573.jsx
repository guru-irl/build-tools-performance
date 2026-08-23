import React from 'react';
const LABEL_4573 = 'component_4573';
export function Component4573({ value = 4573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4573, 'data-value': derived.doubled }, children);
}
export default Component4573;
