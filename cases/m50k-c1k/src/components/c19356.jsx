import React from 'react';
const LABEL_19356 = 'component_19356';
export function Component19356({ value = 19356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19356, 'data-value': derived.doubled }, children);
}
export default Component19356;
