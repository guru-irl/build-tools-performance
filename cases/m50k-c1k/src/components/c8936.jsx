import React from 'react';
const LABEL_8936 = 'component_8936';
export function Component8936({ value = 8936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8936, 'data-value': derived.doubled }, children);
}
export default Component8936;
