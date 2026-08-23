import React from 'react';
const LABEL_46422 = 'component_46422';
export function Component46422({ value = 46422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46422, 'data-value': derived.doubled }, children);
}
export default Component46422;
