import React from 'react';
const LABEL_19072 = 'component_19072';
export function Component19072({ value = 19072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19072, 'data-value': derived.doubled }, children);
}
export default Component19072;
