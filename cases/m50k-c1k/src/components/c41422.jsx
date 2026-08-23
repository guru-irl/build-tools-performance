import React from 'react';
const LABEL_41422 = 'component_41422';
export function Component41422({ value = 41422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41422, 'data-value': derived.doubled }, children);
}
export default Component41422;
