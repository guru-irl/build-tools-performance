import React from 'react';
const LABEL_12342 = 'component_12342';
export function Component12342({ value = 12342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12342, 'data-value': derived.doubled }, children);
}
export default Component12342;
