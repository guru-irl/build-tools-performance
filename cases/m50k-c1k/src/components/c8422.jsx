import React from 'react';
const LABEL_8422 = 'component_8422';
export function Component8422({ value = 8422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8422, 'data-value': derived.doubled }, children);
}
export default Component8422;
