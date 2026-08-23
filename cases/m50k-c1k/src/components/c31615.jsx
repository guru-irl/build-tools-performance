import React from 'react';
const LABEL_31615 = 'component_31615';
export function Component31615({ value = 31615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31615, 'data-value': derived.doubled }, children);
}
export default Component31615;
