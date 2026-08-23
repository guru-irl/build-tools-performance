import React from 'react';
const LABEL_5945 = 'component_5945';
export function Component5945({ value = 5945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5945, 'data-value': derived.doubled }, children);
}
export default Component5945;
