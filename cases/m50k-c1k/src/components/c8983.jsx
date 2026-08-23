import React from 'react';
const LABEL_8983 = 'component_8983';
export function Component8983({ value = 8983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8983, 'data-value': derived.doubled }, children);
}
export default Component8983;
