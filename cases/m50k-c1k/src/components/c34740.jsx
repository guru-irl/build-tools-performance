import React from 'react';
const LABEL_34740 = 'component_34740';
export function Component34740({ value = 34740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34740, 'data-value': derived.doubled }, children);
}
export default Component34740;
