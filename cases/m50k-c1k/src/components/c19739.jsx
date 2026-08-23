import React from 'react';
const LABEL_19739 = 'component_19739';
export function Component19739({ value = 19739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19739, 'data-value': derived.doubled }, children);
}
export default Component19739;
