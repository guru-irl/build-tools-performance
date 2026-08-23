import React from 'react';
const LABEL_5183 = 'component_5183';
export function Component5183({ value = 5183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5183, 'data-value': derived.doubled }, children);
}
export default Component5183;
