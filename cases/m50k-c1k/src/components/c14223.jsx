import React from 'react';
const LABEL_14223 = 'component_14223';
export function Component14223({ value = 14223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14223, 'data-value': derived.doubled }, children);
}
export default Component14223;
