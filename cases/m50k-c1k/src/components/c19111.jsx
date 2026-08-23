import React from 'react';
const LABEL_19111 = 'component_19111';
export function Component19111({ value = 19111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19111, 'data-value': derived.doubled }, children);
}
export default Component19111;
