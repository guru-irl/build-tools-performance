import React from 'react';
const LABEL_45936 = 'component_45936';
export function Component45936({ value = 45936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45936, 'data-value': derived.doubled }, children);
}
export default Component45936;
