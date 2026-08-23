import React from 'react';
const LABEL_4422 = 'component_4422';
export function Component4422({ value = 4422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4422, 'data-value': derived.doubled }, children);
}
export default Component4422;
