import React from 'react';
const LABEL_1422 = 'component_1422';
export function Component1422({ value = 1422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1422, 'data-value': derived.doubled }, children);
}
export default Component1422;
