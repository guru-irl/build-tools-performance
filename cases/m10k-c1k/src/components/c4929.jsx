import React from 'react';
const LABEL_4929 = 'component_4929';
export function Component4929({ value = 4929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4929, 'data-value': derived.doubled }, children);
}
export default Component4929;
