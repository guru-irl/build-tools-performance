import React from 'react';
const LABEL_4342 = 'component_4342';
export function Component4342({ value = 4342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4342, 'data-value': derived.doubled }, children);
}
export default Component4342;
