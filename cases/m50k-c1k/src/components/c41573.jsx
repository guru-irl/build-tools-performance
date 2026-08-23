import React from 'react';
const LABEL_41573 = 'component_41573';
export function Component41573({ value = 41573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41573, 'data-value': derived.doubled }, children);
}
export default Component41573;
